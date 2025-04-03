"use client";

import { useState } from "react";
import Button from "./Button";

export default function RegistrationCard() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/create-checkout", {
        method: "POST",
      });
      const { url, error } = await response.json();

      if (error) {
        console.error("Error:", error);
        alert("Der opstod en fejl. Prøv venligst igen.");
        return;
      }

      window.location.href = url;
    } catch (error) {
      console.error("Error:", error);
      alert("Der opstod en fejl. Prøv venligst igen.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sticky top-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-50 hover:shadow-xl transition-all duration-300">
        <div className="text-center mb-8">
          <div className="inline-block mb-4 relative">
            <div className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              100 DKK
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
              <span className="text-sm font-bold text-yellow-900">🎉</span>
            </div>
          </div>
          <p className="text-gray-600 text-lg">Alt inklusiv</p>
        </div>

        <Button onClick={handlePayment} disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Behandler...
            </span>
          ) : (
            "Tilmeld dig nu"
          )}
        </Button>

        <div className="mt-8 space-y-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
          <div className="flex items-center text-gray-700">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-medium">Sikker betaling</span>
          </div>
          <div className="flex items-center text-gray-700">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="font-medium">Øjeblikkelig bekræftelse</span>
          </div>
        </div>
      </div>
    </div>
  );
}
