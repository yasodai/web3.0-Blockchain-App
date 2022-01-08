import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

function ServiceCard({ title, icon, color, subtitle }) {
  return (
    <div
      className="flex flex-row justify-start items-center
    bg-white/5 backdrop-blur-sm rounded-2xl border border-white/30
    shadow shadow-white hover:shadow-yellow-300 cursor-pointer
    p-3 m-2"
    >
      <div
        className={`flex justify-center items-center rounded-full w-10 h-10 ${color}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="text-white mt-2 text-lg">{title}</h3>
        <p className="text-white mt-1 text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
}
function Services() {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col justify-between items-center mf:p-20 py-12 px-4">
        {/* left */}
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-4xl sm:text-5xl py-8 sm:py-2 text-gradient">
            Services that we <br /> continue to improve
          </h1>
        </div>

        {/* right */}
        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Security gurantee"
            icon={<BsShieldFillCheck className="text-white w-5 h-5" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="Best exchange rates"
            icon={<BiSearchAlt className="text-white w-5 h-5" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Fastest transactions"
            icon={<RiHeart2Fill className="text-white w-5 h-5" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
