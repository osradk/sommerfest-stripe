"use client";

import { useState } from "react";
import EventHeader from "./components/EventHeader";
import EventDetails from "./components/EventDetails";
import EventFeatures from "./components/EventFeatures";
import RegistrationCard from "./components/RegistrationCard";
import Footer from "./components/Footer";

export default function Home() {
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
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sommerfest 2025
          </h1>
          <p className="text-xl text-indigo-100">
            Kom og vær med til årets festligste begivenhed med god mad, drikke
            og underholdning
          </p>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white border-opacity-20">
          {/* Tid og sted */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-indigo-300 rounded-full mr-3"></span>
              Tid og sted
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <p className="text-white font-medium">15. juni 2025</p>
                  <p className="text-indigo-200">kl. 14:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-white font-medium">Vesterbro Kulturhus</p>
                  <p className="text-indigo-200">København, Danmark</p>
                </div>
              </div>
            </div>
          </section>

          {/* Det får du med */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-1.5 h-6 bg-indigo-300 rounded-full mr-3"></span>
              Det får du med
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🍽️</span>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Lækker buffet med både kolde og varme retter
                  </p>
                  <p className="text-indigo-200">
                    Nyd en varieret menu med både traditionelle og moderne
                    retter
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🍷</span>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Fri bar med øl, vin og sodavand
                  </p>
                  <p className="text-indigo-200">
                    Kvalitetsdrikkevarer hele aftenen
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎵</span>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Live musik og underholdning
                  </p>
                  <p className="text-indigo-200">
                    Professionelle musikere og overraskende indslag
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pris og tilmelding */}
          <section className="text-center">
            <div className="mb-6">
              <p className="text-4xl font-bold text-white">100 DKK</p>
              <p className="text-indigo-200">Alt inklusiv</p>
            </div>
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-600"
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
                </>
              ) : (
                "Tilmeld dig nu"
              )}
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
