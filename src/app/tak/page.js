"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import supabase from "../../lib/supabase";

export default function TakPage() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUserData() {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const userId = searchParams.get("user");

        if (!userId) {
          console.error("Ingen bruger ID fundet i URL");
          setIsLoading(false);
          return;
        }

        // Hent brugerdata fra Supabase
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", userId)
          .single();

        if (error) {
          console.error("Fejl ved hentning af bruger:", error);
          setIsLoading(false);
          return;
        }

        // Opdater betalingsstatus i database
        const { error: updateError } = await supabase
          .from("payments")
          .update({ status: "completed" })
          .eq("user_id", userId)
          .eq("status", "awaiting");

        if (updateError) {
          console.error("Fejl ved opdatering af betaling:", updateError);
        }

        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Der opstod en fejl:", error);
        setIsLoading(false);
      }
    }

    getUserData();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="max-w-4xl w-full mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="mb-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center animate-bounce">
              <svg
                className="w-12 h-12 text-green-500"
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
            <h1 className="text-3xl font-bold mt-4 text-green-600">
              Tak for din tilmelding!
            </h1>
            <p className="text-gray-600 mt-2">
              Vi glæder os til at se dig til sommerfesten
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : userData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">📅</span> Arrangementdetaljer
                </h2>
                <div className="space-y-3 bg-indigo-50 p-4 rounded-xl">
                  <div>
                    <p className="text-sm text-indigo-700 font-medium">Dato</p>
                    <p className="text-gray-900">15. juni 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-indigo-700 font-medium">Tid</p>
                    <p className="text-gray-900">18:00 - 02:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-indigo-700 font-medium">
                      Lokation
                    </p>
                    <p className="text-gray-900">
                      Festsalen, Hovedgaden 123, 2100 København Ø
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">👤</span> Dine oplysninger
                </h2>
                <div className="space-y-3 bg-green-50 p-4 rounded-xl">
                  <div>
                    <p className="text-sm text-green-700 font-medium">Navn</p>
                    <p className="text-gray-900">{userData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-700 font-medium">Email</p>
                    <p className="text-gray-900">{userData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-700 font-medium">
                      Telefon
                    </p>
                    <p className="text-gray-900">{userData.phone}</p>
                  </div>
                  {userData.allergies && (
                    <div>
                      <p className="text-sm text-green-700 font-medium">
                        Allergier/kostbehov
                      </p>
                      <p className="text-gray-900">{userData.allergies}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700">
                Kunne ikke hente dine oplysninger, men din tilmelding er
                registreret.
              </p>
            </div>
          )}

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Vi har sendt dig en bekræftelse på email. Husk at medbringe ID til
              arrangementet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Tilbage til forsiden
              </Link>
              <button
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                onClick={() => {
                  // Her ville der normalt være kode til at tilføje til kalender
                  alert(
                    "Funktion til at tilføje til kalender vil blive implementeret senere."
                  );
                }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Tilføj til kalender
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
