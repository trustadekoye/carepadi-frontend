import React from "react";
import HeroSection from "../../components/Herosection";
import AboutSection from "../../components/AboutSection";
import DashboardSection from "../../components/DashboardSection";
import AppointmentSection from "../../components/AppointmentSection";
import Pricing from "../../components/Pricing";
import MissionVisionSection from "../../components/Mission";

const Homepage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <DashboardSection />
      <AppointmentSection />
      <Pricing />
    </div>
  );
};

export default Homepage;
