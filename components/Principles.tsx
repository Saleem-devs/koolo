import React from "react";

export default function Principles() {
  return (
    <section
      className="bg-background pb-12 pt-16 md:pt-24 md:pb-16"
      id="values"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          The Principles Behind Koōlo
        </h2>

        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-center items-center md:items-stretch relative">
          <div className="bg-chart-2 rounded-2xl p-8 w-full md:w-[380px] md:mr-[-10px] md:z-10 transform md:rotate-[-4deg] transition-all duration-300 ease-in-out md:hover:rotate-0 md:hover:z-40 md:hover:scale-105 md:hover:shadow-lg cursor-pointer">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Mission</h3>
              <p className="text-base text-black">
                To empower every Nigerian to achieve financial freedom through
                smarter savings.
              </p>
            </div>
          </div>

          <div className="bg-chart-3 rounded-2xl p-8 w-full md:w-[380px] md:mr-[-10px] md:z-20 transform md:rotate-[-2deg] transition-all duration-300 ease-in-out md:hover:rotate-0 md:hover:z-40 md:hover:scale-105 md:hover:shadow-lg cursor-pointer">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Vision</h3>
              <p className="text-base text-white">
                To become the most trusted financial savings platform across
                Nigeria— where anyone, anywhere, can create the life they want
                with smarter savings.
              </p>
            </div>
          </div>

          <div className="bg-chart-4 rounded-2xl p-8 w-full md:w-[380px] md:z-30 transform md:rotate-[3deg] transition-all duration-300 ease-in-out md:hover:rotate-0 md:hover:z-40 md:hover:scale-105 md:hover:shadow-lg cursor-pointer">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Purpose</h3>
              <p className="text-base text-white">
                Working together to help you build a secure financial future, so
                you can create the life you deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
