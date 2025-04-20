"use client";

import { useState } from "react";
import { forms } from "@/data/index";

export default function Carousel() {
  const [activeForm, setActiveForm] = useState("researcher");
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = (key) => {
    if (activeForm === key) {
      setShowForm(!showForm);
    } else {
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

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-white p-10">
      <div className="text-center max-w-xl text-lg text-white">
      <h2 className="text-4xl font-extrabold mb-6 flex gap-4 justify-center">
  <span className="bg-white text-black px-3 py-1">Work</span>
  <span className="bg-white text-black px-3 py-1">With</span>
  <span className="bg-white text-black px-3 py-1">Us</span>
</h2>



<p className="text-2xl font-semibold mt-2 whitespace-nowrap">
  <span
    className="inline-block bg-white text-black px-4 py-2"
    style={{
      lineHeight: '1.3',
    }}
  >
    Choose an option below to get started.
  </span>
</p>



      </div>

      {/* Button container with stronger glowing backdrop */}
      <div className="relative flex space-x-4 mt-6 z-10">
        {/* Enhanced glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="w-full h-full rounded-2xl bg-yellow-500 opacity-80 blur-[100px] shadow-[0_0_300px_180px_rgba(234,179,8,0.75)] scale-125" />
        </div>

        {Object.keys(forms).map((key) => {
          const isActive = activeForm === key;
          const isResearcher = key === "researcher";

          const baseClass = "px-6 py-3 font-semibold rounded-lg transition-all duration-300 relative z-10";
          const extraClass = isActive || (isInitialLoad && isResearcher)
            ? "bg-yellow-500 shadow-lg shadow-yellow-500 text-white"
            : "bg-[#1B1B1B] text-gray-300";

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
      </div>

      <div
        className={`mt-6 w-full max-w-[600px] mx-auto transition-all duration-[1000ms] ease-in-out ${
          showForm ? "border-1 border-[#F4F4F4] p-1 rounded-2xl" : "border-1 border-transparent"
        }`}
      >
        {showForm && activeForm && (
          <div className="p-6 rounded-2xl text-white">
            <h1 className="text-2xl font-bold mb-4">{forms[activeForm]?.text}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {forms[activeForm]?.fields.map((field) =>
                field.type === "select" ? (
                  <select
                    key={field.name}
                    name={field.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#6B7280] rounded-lg"
                  >
                    <option value="" disabled selected>{field.placeholder}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
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
                className="w-full bg-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>

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
}
