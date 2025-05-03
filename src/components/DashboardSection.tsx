import React from "react";
import { Button } from "./ui/button";

const DashboardSection: React.FC = () => {
  return (
    <section className="w-full py-20 flex items-center justify-center">
      <div className="container text-center px-4">
        <h2 className="text-2xl md:text-3xl font-normal text-[#2C3B8B] mb-1">
          Your Entire Life, One
        </h2>
        <h2 className="text-2xl md:text-3xl font-normal text-[#2C3B8B] mb-8">
          Dashboard. Finally
        </h2>
        <Button variant="default" className="px-10 py-6 text-base">
          Check it out!
        </Button>
      </div>
    </section>
  );
};

export default DashboardSection;
