// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col justify-center items-center min-w-full">
      <div className="animate-fadeIn text-center">
        <h1 className="text-6xl font-bold text-black">
          Welcome to <span className="text-dark">My Portfolio</span>
        </h1>
        <p className="mt-4 text-lg text-black">
          Crafting Solutions,<span className="text-[#395557]"> One Line of Code at a Time </span> 
        </p>
        <div className="mt-8">
          <a
            href="#project"
            className="bg-black text-light px-6 py-3 rounded-full shadow-lg transition hover:bg-dark"
          >
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 animate-slideUp">
       
      </div>
    </div>
  );
}
