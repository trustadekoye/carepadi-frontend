import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../../components/ui/button";

const AuthPage: React.FC = () => {
  // Form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password visibility
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form handling
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login submitted:", { loginEmail, loginPassword });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    console.log("Signup submitted:", {
      signupEmail,
      signupPassword,
      confirmPassword,
    });
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(44, 59, 139, 0.3)" },
    blur: { scale: 1, boxShadow: "none" },
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Signup Section */}
      <motion.div
        className="w-full md:w-1/2 bg-[#2C3B8B] text-white p-6 md:p-10 flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-md mx-auto w-full"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-12 text-center">
            sign up here except
          </h2>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="signup-email" className="block text-sm">
                Email
              </label>
              <motion.div
                whileFocus="focus"
                animate="blur"
                variants={inputVariants}
              >
                <input
                  id="signup-email"
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full p-3 rounded-full bg-[#2C3B8B] border border-white/50 text-white focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <label htmlFor="signup-password" className="block text-sm">
                Password
              </label>
              <motion.div
                className="relative"
                whileFocus="focus"
                animate="blur"
                variants={inputVariants}
              >
                <input
                  id="signup-password"
                  type={showSignupPassword ? "text" : "password"}
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full p-3 rounded-full bg-[#2C3B8B] border border-white/50 text-white focus:outline-none"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  onClick={() => setShowSignupPassword(!showSignupPassword)}
                >
                  {showSignupPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </motion.div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block text-sm">
                Re-type Password
              </label>
              <motion.div
                className="relative"
                whileFocus="focus"
                animate="blur"
                variants={inputVariants}
              >
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 rounded-full bg-[#2C3B8B] border border-white/50 text-white focus:outline-none"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="pt-6"
            >
              <button
                type="submit"
                className="w-full py-3 bg-white text-[#2C3B8B] rounded-full font-normal text-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
              >
                Sign Up
              </button>
            </motion.div>
            <p className="text-sm text-center text-white font-normal">
              <a href="/" className="underline">
                Back to homepage
              </a>
            </p>
          </form>
        </motion.div>
      </motion.div>

      {/* Login Section */}
      <motion.div
        className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="max-w-md mx-auto w-full"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-12 text-[#2C3B8B] text-center">
            you already have an account
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="login-email"
                className="block text-sm text-[#2C3B8B]"
              >
                Email
              </label>
              <motion.div
                whileFocus="focus"
                animate="blur"
                variants={inputVariants}
              >
                <input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full p-3 rounded-full bg-white border border-[#2C3B8B]/30 text-[#2C3B8B] focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="login-password"
                className="block text-sm text-[#2C3B8B]"
              >
                Password
              </label>
              <motion.div
                className="relative"
                whileFocus="focus"
                animate="blur"
                variants={inputVariants}
              >
                <input
                  id="login-password"
                  type={showLoginPassword ? "text" : "password"}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full p-3 rounded-full bg-white border border-[#2C3B8B]/30 text-[#2C3B8B] focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#2C3B8B]/70 hover:text-[#2C3B8B]"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                >
                  {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </motion.div>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-[#2C3B8B] hover:underline">
                Forgot password?
              </a>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="pt-6"
            >
              <button
                type="submit"
                className="w-full py-3 bg-[#2C3B8B] text-white rounded-full font-normal text-lg hover:bg-[#1F2B6B] transition duration-300 cursor-pointer"
              >
                Sign In
              </button>
            </motion.div>
            <p className="text-sm text-center text-[#2C3B8B] font-normal">
              <a href="/" className="underline">
                Back to homepage
              </a>
            </p>
          </form>
        </motion.div>
      </motion.div>

      {/* Mobile Toggle - Only visible on small screens */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 flex justify-center">
        <Button
          variant="default"
          className="bg-[#2C3B8B] hover:bg-[#1F2B6B] text-white px-6 py-2 rounded-full shadow-lg"
          onClick={() => {
            // Scroll to the opposite form on mobile
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          {window.scrollY < window.innerHeight / 2
            ? "Already have an account?"
            : "Create new account"}
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
