"use client";

import React from "react";
import { motion } from "framer-motion";
import { Animation, Footer } from "./components/global";
import { Button, Image } from "./components/ui";
import { AppleIcon, GoogleIcon } from "./components/svgs";

export default function Home() {
  return (
    <Animation>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
        {/* Header */}
        <header className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Image
              src="/images/logo.png"
              alt="OgaBuzz"
              width={64}
              height={64}
            />
            <button className="border-primary bg-none border rounded-[30px] text-[#229EFF] px-[40px] py-[16px] text-[15px] font-normal ">
              Download Now
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="px-4 pt-12 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/overlay.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-cyan-50/80"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[140%] font-normal italic text-[#1A1A1A]">
                  Stay Informed
                </h1>
                <h2 className="text-3xl italic sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1A1A1A]">
                  Stay Ahead With{" "}
                  <span className="text-[#1A1A1A] italic">OgaBuzz</span>
                </h2>
              </div>

              <p className="text-[26px] max-w-[1074px] mx-auto  text-center capitalizeleading-[140%] font-normal text-[#969696]">
                ogaBuzz is the first news app built for you - personalized
                headlines and real-time local reporting, powered by ai and your
                location
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <button className="bg-primary bg-none border rounded-[30px] text-white px-[40px] py-[20px] text-[15px] font-normal flex items-center space-x-2 w-full sm:w-auto">
                  <AppleIcon />
                  <span>Download for iPhone</span>
                </button>
                <button className="border-primary bg-none border rounded-[30px] text-[#1A1A1A] px-[40px] py-[20px] text-[15px] font-normal flex items-center space-x-2 w-full sm:w-auto">
                  <GoogleIcon />
                  <span>Download For Android</span>
                </button>
              </div>

              {/* Phone Mockup */}
              <motion.figure
                className="flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/images/hero.png"
                  alt="OgaBuzz"
                  width={729}
                  height={675}
                />
              </motion.figure>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8 bg-[#F7F7F7] mt-[50px] sm:mt-[75px] md:mt-[100px] mx-4 sm:mx-[72px] md:mx-[144px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <p className="text-base sm:text-lg text-gray-600">
                We Cover All Categories
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-400 italic">
                Sports. Politics. Entertainments.
              </h3>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}

        <section className="px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h4 className="capitalize text-[#969696] text-[18px] sm:text-[22px] md:text-[26px] font-normal text-center leading-[140%]">
                our features
              </h4>
            </motion.div>

            <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto">
              {/* First Row: Daily Headlines + Community Updates */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {/* Feature 1: Daily Headlines */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] backdrop-blur-[10px]"
                  style={{
                    backgroundImage: "url('/images/pattern.png')",
                    backgroundColor: "#F7F7F7",
                  }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-[28px] sm:text-[36px] md:text-[45px] max-w-[280px] sm:max-w-[320px] md:max-w-[349px] font-bold text-black leading-tight">
                      Daily Headlines From
                    </h3>
                    <div
                      className="flex flex-col w-fit space-x-2 bg-[#229EFF] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3"
                      style={{
                        borderTopRightRadius: "50px",
                        borderBottomRightRadius: "50px",
                        borderBottomLeftRadius: "50px",
                      }}
                    >
                      <span className="font-bold text-[#F7F7F7] text-[20px] sm:text-[26px] md:text-[31px]">
                        100+ Sources
                      </span>
                      <Image
                        src="/images/news.svg"
                        alt="Arrow"
                        width={120}
                        height={40}
                        className="w-[120px] sm:w-[136px] md:w-[152px] h-auto"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 sm:mt-5 md:mt-6">
                    <Image
                      src="/images/headline.svg"
                      alt="Daily Headlines Feature"
                      width={350}
                      height={450}
                      className="w-[250px] sm:w-[300px] md:w-[350px] h-auto max-w-full"
                    />
                  </div>
                </motion.div>

                {/* Feature 2: Community Updates */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] backdrop-blur-[10px]"
                  style={{
                    backgroundImage: "url('/images/pattern.png')",
                    backgroundColor: "#F7F7F7",
                  }}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-[28px] sm:text-[36px] md:text-[45px] max-w-[200px] sm:max-w-[230px] md:max-w-[264px] font-bold text-black leading-tight">
                      Community Updates
                    </h3>
                    <p className="text-[18px] sm:text-[22px] md:text-[26px] text-[#969696] leading-relaxed max-w-[320px] sm:max-w-[450px] md:max-w-[583px]">
                      Get Updated On What Is Going On Around Your Location,
                      Thanks To Our Local News Champions
                    </p>
                  </div>
                  <div className="flex justify-center mt-4 sm:mt-5 md:mt-6">
                    <Image
                      src="/images/update.svg"
                      alt="Community Updates Feature"
                      width={350}
                      height={450}
                      className="w-[250px] sm:w-[300px] md:w-[350px] h-auto max-w-full"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Second Row: Earn From Posts - Full Width */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] backdrop-blur-[10px]"
                style={{
                  backgroundImage: "url('/images/pattern.png')",
                  backgroundColor: "#F7F7F7",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-3 sm:space-y-4 order-2 lg:order-1">
                    <h3 className="text-[28px] sm:text-[36px] md:text-[45px] max-w-[400px] sm:max-w-[550px] md:max-w-[685px] font-bold text-black leading-[140%]">
                      Earn From Your Posts
                    </h3>
                    <p className="text-[18px] sm:text-[22px] md:text-[26px] text-[#B7B7B7] leading-[140%]">
                      Monetize Your Posts And Videos Based On Engagements
                    </p>
                  </div>
                  <div className="flex justify-center order-1 lg:order-2">
                    <Image
                      src="/images/earning.svg"
                      alt="Earn From Posts Feature"
                      width={350}
                      height={450}
                      className="w-[250px] sm:w-[300px] md:w-[350px] h-auto max-w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Animation>
  );
}
