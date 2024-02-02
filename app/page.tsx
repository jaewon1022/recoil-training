"use client";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      MAIN!
      <div className="flex flex-row items-center gap-20">
        <button
          onClick={() => {
            location.href = "/todo";
          }}
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          go to TO DO LIST!
        </button>

        <button
          onClick={() => {
            location.href = "/notice";
          }}
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          go to Notice LIST!
        </button>
      </div>
    </main>
  );
}
