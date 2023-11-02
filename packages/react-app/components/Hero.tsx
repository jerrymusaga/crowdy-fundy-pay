import React from "react";

export default function Hero() {
  return (
    <div className="text-center bg-white text-gray-800 py-24 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
  tracking-tight mb-12"
      >
        <span className="capitalize">
          Support Inspiring projects powered by Mini-Pay and SocialConnect
        </span>
        <br />
        <span className="uppercase text-blue-600">Crowdy</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600
    text-white font-medium text-xs leading-tight uppercase
    rounded-full shadow-md hover:bg-blue-700"
        >
          Add Project
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-blue-600
    font-medium text-xs leading-tight uppercase text-blue-600
    rounded-full shadow-md bg-transparent hover:bg-blue-700
    hover:text-white"
        >
          Back Projects
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
      h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-blue-900
        leading-5"
          >
            100
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
      h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-blue-900
        leading-5"
          >
            3
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
      h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-blue-900
        leading-5"
          >
            57 Celo
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
}
