import React, { useState, useEffect } from "react";
import Signature from "../assets/svgs/signature.svg";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  const signatureVariants = {
    hidden: { opacity: 0, rotate: -5 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <motion.div
        className="container mx-auto px-4 py-10 md:py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Hero text */}
        <motion.div variants={itemVariants}>
          <h3 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#2C3B8B] leading-tight md:leading-snug font-medium">
            Find a Real Doctor — Before Your
          </h3>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-[28px] sm:text-[36px] md:text-[48px] leading-tight md:leading-snug font-medium">
            <span className="text-[#2C3B8B]">Symptoms </span>
            <motion.span
              className="text-[#8B2C2C]"
              animate={{
                scale: [1, 1.05, 1],
                color: ["#8B2C2C", "#C03030", "#8B2C2C"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Google
            </motion.span>
            <span className="text-[#2C3B8B]"> You First.</span>
          </h3>
        </motion.div>

        {/* Signature and text */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center mt-8 md:mt-10"
          variants={itemVariants}
        >
          <motion.img
            src={Signature}
            alt="Signature"
            className="w-16 h-16 sm:w-20 sm:h-20"
            variants={signatureVariants}
          />
          <motion.p
            className="text-[#2C3B8B] text-[16px] sm:text-[18px] md:text-[20px] leading-snug mt-2 sm:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Finally they can tell us what they wrote
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="default"
              className="px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto bg-[#2C3B8B] hover:bg-[#1F2B6B] text-base md:text-lg font-medium shadow-lg"
            >
              Book Appointment
            </Button>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="outline"
              className="px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto border-[#2C3B8B] text-[#2C3B8B] hover:bg-blue-50 text-base md:text-lg font-medium"
            >
              Go to my dashboard
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
