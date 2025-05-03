import React, { useState } from "react";
import { motion } from "framer-motion";

const MissionVisionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabVariants = {
    active: {
      color: "#2C3B8B",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    inactive: {
      color: "#CBD5E1",
      opacity: 0.5,
      y: 10,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start">
          {/* Left column - Tabs */}
          <div className="flex flex-col space-y-8">
            <motion.h2
              className="text-4xl md:text-4xl lg:text-4xl font-normal cursor-pointer"
              variants={tabVariants}
              animate={activeTab === "mission" ? "active" : "inactive"}
              onClick={() => handleTabClick("mission")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Mission
            </motion.h2>

            <motion.h2
              className="text-4xl md:text-4xl lg:text-4xl font-normal cursor-pointer"
              variants={tabVariants}
              animate={activeTab === "vision" ? "active" : "inactive"}
              onClick={() => handleTabClick("vision")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Vision
            </motion.h2>
          </div>

          {/* Right column - Content */}
          <div className="relative min-h-[150px]">
            {activeTab === "mission" && (
              <motion.div
                key="mission"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute inset-0"
              >
                <p className="text-xl md:text-xl lg:text-xl text-[#2C3B8B] font-normal leading-relaxed">
                  To make quality healthcare accessible and connected through
                  intuitive digital solutions for all.
                </p>
              </motion.div>
            )}

            {activeTab === "vision" && (
              <motion.div
                key="vision"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute inset-0"
              >
                <p className="text-xl md:text-xl lg:text-xl text-[#2C3B8B] font-normal leading-relaxed">
                  To transform healthcare in Nigeria through a connected
                  platform that delivers quality care, insights, and support to
                  everyone, anytime, anywhere.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
