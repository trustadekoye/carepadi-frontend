import React from "react";
import { motion } from "framer-motion";
import DoctorImage1 from "../assets/images/doctor-1.png";
import DoctorImage2 from "../assets/images/doctor-2.png";

const AboutSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 px-4 overflow-hidden">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-8 lg:gap-12">
          {/* Card 1 */}
          <motion.div
            className="w-full max-w-xs md:w-[301px] h-auto md:h-[668px] bg-[#2C3B8B] shadow-lg flex flex-col justify-between rounded-lg overflow-hidden"
            variants={cardVariants}
          >
            <h3 className="text-white text-[22px] sm:text-[28px] font-normal text-center mt-6 mb-6 p-4 sm:p-6">
              Skip the guesswork. See a specialist
            </h3>
            <div className="mt-auto">
              <img
                src={DoctorImage1}
                alt="Doctor specialist"
                className="w-full h-[300px] sm:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Card 2 - Lowered on desktop */}
          <motion.div
            className="w-full max-w-xs md:w-[301px] h-auto md:h-[668px] bg-[#F7F4F1] shadow-lg flex flex-col justify-between rounded-lg overflow-hidden mt-6 md:mt-20"
            variants={cardVariants}
          >
            <h3 className="text-[#2C3B8B] text-[22px] sm:text-[28px] font-normal text-center mt-6 p-4 sm:p-6">
              Book an appointment in 30 Seconds
            </h3>
            <div className="mt-auto">
              <img
                src={DoctorImage2}
                alt="Quick appointment booking"
                className="w-full h-[300px] sm:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
