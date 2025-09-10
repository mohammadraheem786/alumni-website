import React from "react";
import heroImg from "../assets/group-photo.jpg";

const HeroSection = () => (
  <section className="relative w-full h-[500px] md:h-[600px] bg-white flex items-center justify-center overflow-hidden">
    {/* Hero Image */}
    <img
      src={heroImg}
      alt="Alumni Group"
      className="w-full h-full object-cover"
      loading="eager"
      aria-label="Alumni Maker Pass Group"
      draggable={false}
    />

    {/* Bottom Red Label */}
    <div className="absolute left-1/4 -translate-x-1/3 bottom-0 w-[400px] md:w-[670px] h-[100px] md:h-[110px] bg-red-600 flex items-center justify-center">
      <span className="text-white text-3xl md:text-4xl font-bold font-[Montserrat,Arial,sans-serif]">
        Alumini Maker Pass
      </span>
    </div>
  </section>
);

export default HeroSection;