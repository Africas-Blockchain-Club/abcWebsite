"use client";

import React, { useState } from "react";
import { forms } from "@/data/index";
import ParticleBackground from "./particles"; 
import BlockchainNetwork from '@/components/ui/blockchain-network';



interface AlertState {
  message: string;
  type: 'success' | 'error' | ''; // More specific type
  visible: boolean;
}

interface FormDataState {
  [key: string]: string; // Assuming form values are strings
}

// Define type for form fields based on usage in the component
interface FormField {
    name: string;
    type: 'select' | 'textarea' | 'text' | 'email' | 'tel'; // Add other relevant types
    placeholder: string;
    options?: string[]; // Optional for select type
}

// Define type for the forms data structure imported from @/data/index
// This is an assumption based on usage, adjust if the actual structure differs
interface FormsData {
    [key: string]: {
        text: string;
        fields: FormField[];
    };
}

// Use React.FC for functional component type
const Collaborate: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string>("researcher"); // Explicit type for key
  const [formData, setFormData] = useState<FormDataState>({});
  const [alert, setAlert] = useState<AlertState>({ message: "", type: "", visible: false });
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<boolean>(false);

  // Add type for the key parameter
  const handleButtonClick = (key: string): void => {
    if (activeForm === key) {
      setShowForm(!showForm);
    } else {
      setActiveForm(key);
      setShowForm(true);
    }
    setFormData({});
    setIsInitialLoad(false);
  };

  // Add type for the event parameter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add type for the event parameter and return type Promise<void>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // Ensure forms data is treated with the defined type
    const typedForms = forms as FormsData;
    const dataToSend = { formType: activeForm, ...formData };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setAlert({
          message: "Thank you for reaching out! Your submission was successful.",
          type: "success",
          visible: true,
        });
      } else {
        setAlert({
          message: "Your request has failed. Please check your email and try again.",
          type: "error",
          visible: true,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlert({
        message: "Something went wrong. Please try again later.",
        type: "error",
        visible: true,
      });
    }
  };

  const buttonLabels = {
    developer: "Hire a Developer",
    researcher: "Work with a Researcher",
    partner: "Partner with Us",
  };

  // Ensure forms data is treated with the defined type
  const typedForms = forms as FormsData;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-black/90 via-black/70 to-black/50 justify-start text-white p-4 sm:p-10 transition-all duration-700">
      {/* Main container */}
      <div className={`w-full flex flex-col items-center justify-center transition-all duration-700 
        ${showForm ? "mt-10" : "mt-[25vh]"}`}>


        {/* Header and subtitle */}
        <div className="text-center max-w-xl text-lg relative z-20">
          <h2 className="text-4xl font-extrabold mb-6 flex gap-4 justify-center">
            <span className="text-white px-3 py-1">Work</span>
            <span className=" text-white px-3 py-1">With</span>
            <span className=" text-white px-3 py-1">Us</span>
          </h2>

          <p className="text-2xl font-semibold mt-2 whitespace-nowrap">
            <span className="inline-block  text-white px-4 py-2" style={{ lineHeight: "1.3" }}>
              Choose an option below to get started.
            </span>
          </p>
        </div>

        {/* Glow and buttons container */}
        <div className="relative w-full flex flex-col items-center justify-center mt-6 z-10">
          {/* Glow backdrop - centered */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none w-[610px] h-[450px]">
            <div className="w-full h-full bg-amber-600 opacity-80 blur-[100px] rounded-2xl shadow-[0_0_300px_180px_rgba(234,179,8,0.75)]" /> */}
            <ParticleBackground className="mx-auto" />
          {/* </div> */}

          {/* Buttons - centered with the glow */}
          <div className="flex flex-wrap justify-center gap-4 z-10">
            {Object.keys(typedForms).map((key: string) => { // Add type for key
              const isActive = activeForm === key;
              const isResearcher = key === "researcher";

              const baseClass = "px-6 py-3 font-semibold rounded-lg transition-all duration-300";
              const extraClass = isActive || (isInitialLoad && isResearcher)
                ? "bg-amber-600 shadow-md shadow-amber-500 text-white"
                : "bg-[#1B1B1B] text-gray-300";

              return (
                <button
                  key={key}
                  onClick={() => handleButtonClick(key)}
                   className={`${baseClass} ${extraClass}`}
                 >
                   {buttonLabels[key as keyof typeof buttonLabels]} {/* Add type assertion */}
                 </button>
               );
            })}
          </div>

          {/* Form - centered with the glow */}
          <div className={`mt-6 w-full max-w-[600px] transition-all duration-700 ease-in-out overflow-hidden ${
            showForm ? "opacity-100 scale-100 max-h-[2000px]" : "opacity-0 scale-95 max-h-0"
          }`}>
            {showForm && activeForm && typedForms[activeForm] && ( // Check if typedForms[activeForm] exists
              <div className="p-6 rounded-2xl border border-[#F4F4F4] bg-black/40">
                <h1 className="text-2xl font-bold mb-4">{typedForms[activeForm]?.text}</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {typedForms[activeForm]?.fields.map((field: FormField) => // Add type for field
                    field.type === "select" ? (
                      <select
                        key={field.name}
                        name={field.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-[#6B7280] rounded-lg"
                      >
                        <option value="" disabled selected>
                           {field.placeholder}
                        </option>
                        {field.options?.map((option: string) => ( // Add type for option, check if options exists
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        key={field.name}
                        name={field.name}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full p-3 bg-[#6B7280] rounded-lg h-32"
                      />
                    ) : (
                      <input
                        key={field.name}
                        name={field.name}
                        type={field.type}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full p-3 bg-[#6B7280] rounded-lg"
                      />
                    )
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#1B1B1B] py-3 rounded-lg font-semibold hover:bg-amber-500 transition-all"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Alert */}
      {alert.visible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className={`px-6 py-4 rounded-lg shadow-lg text-center w-96 ${alert.type === "success" ? "bg-[#D8CFC4]" : "bg-[#D8CFC4]"}`}>
            <p>{alert.message}</p>
            <button
              className="mt-3 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200"
              onClick={() => setAlert({ ...alert, visible: false })}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 

export default Collaborate; 
