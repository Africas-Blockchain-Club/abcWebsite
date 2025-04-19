"use client";

import { useState } from "react";
import { forms } from "@/data/index";

export default function Carousel() {
  const [activeForm, setActiveForm] = useState("researcher"); // Default is 'researcher'
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showForm, setShowForm] = useState(false); // NEW: Added form visibility state

  const handleButtonClick = (key) => {
    if (activeForm === key) {
      // Toggle form visibility when clicking same button
      setShowForm(!showForm);
    } else {
      // Show form when clicking different button
      setActiveForm(key);
      setShowForm(true);
    }
    setFormData({});
    setIsInitialLoad(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { formType: activeForm, ...formData };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setAlert({
          message:
            "Thank you for reaching out! Your submission was successful. A verification email has been sent to you.",
          type: "success",
          visible: true,
        });
      } else {
        setAlert({
          message:
            "Your request has failed. Please check your email and try again.",
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

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-white p-10">
      <div className="text-center max-w-xl text-lg text-white">
        <h2 className="text-3xl font-bold mb-3">Work With Us</h2>
        <p>Choose an option below to get started.</p>
      </div>

      <div className="flex space-x-4 mt-6 relative">
        {Object.keys(forms).map((key, index) => {
          const isActive = activeForm === key;
          const isResearcher = key === "researcher";

          const baseClass =
            "px-6 py-3 font-semibold rounded-lg transition-all duration-300 relative z-10";

          let extraClass = "";

          if (isActive) {
            extraClass = "bg-blue-500 shadow-lg shadow-blue-500 text-white";
          } else if (isInitialLoad && isResearcher) {
            extraClass = "bg-blue-500 shadow-lg shadow-blue-500 text-white";
          } else {
            extraClass = "bg-[#1B1B1B] text-gray-300";
          }

          return (
            <button
              key={key}
              onClick={() => handleButtonClick(key)}
              className={`${baseClass} ${extraClass}`}
            >
              {buttonLabels[key]}
            </button>
          );
        })}

        {/* Spillover effect behind the left and right buttons */}
        {isInitialLoad && activeForm === "researcher" && (
          <>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[120px] h-[60px] bg-blue-500 opacity-20 blur-xl rounded-full z-0" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120px] h-[60px] bg-blue-500 opacity-20 blur-xl rounded-full z-0" />
          </>
        )}
      </div>

      {/* ONLY CHANGE: Added showForm condition */}
      {showForm && activeForm && (
        <div className="mt-6 w-full max-w-[600px] mx-auto">
          <div className="p-6 rounded-2xl text-black">
            <h1 className="text-2xl font-bold mb-4">{forms[activeForm]?.text}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {forms[activeForm]?.fields.map((field) =>
                field.type === "select" ? (
                  <select
                    key={field.name}
                    name={field.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#F1E8D6] rounded-lg"
                  >
                    <option value="" disabled selected>
                      {field.placeholder}
                    </option>
                    {field.options.map((option) => (
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
                    className="w-full p-3 bg-[#F1E8D6] rounded-lg h-32"
                  />
                ) : (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full p-3 bg-[#F1E8D6] rounded-lg"
                  />
                )
              )}
              <button
                type="submit"
                className="w-full bg-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {alert.visible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg text-center w-96 
              ${alert.type === "success" ? "bg-[#D8CFC4] text-black" : "bg-[#D8CFC4] text-black"}`}
          >
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
}