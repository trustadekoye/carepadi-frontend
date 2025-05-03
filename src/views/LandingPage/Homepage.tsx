import React from "react";
import HeroSection from "../../components/Herosection";
import AboutSection from "../../components/AboutSection";
import DashboardSection from "../../components/DashboardSection";
import AppointmentSection from "../../components/AppointmentSection";
import Pricing from "../../components/Pricing";

const Homepage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <DashboardSection />
      <AppointmentSection />
      <Pricing />
    </div>
  );
};

export default Homepage;
