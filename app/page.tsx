"use client";

import React from "react";
import { useState } from "react";
import { Button, Image } from "./components/ui";
import { motion } from "framer-motion";
import { Animation } from "./components/global";
import { AppleIcon, GoogleIcon } from "./components/svgs";

export default function Home() {
  return (
    <Animation>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* Header */}
        <header className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Image
              src="/images/logo.png"
              alt="OgaBuzz"
              width={64}
              height={64}
            />
            <button className="border-primary bg-none border rounded-[30px] text-[#229EFF] px-[40px] py-[20px] text-[15px] font-normal ">
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
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-[#F7F7F7] mt-[100px] mx-[144px] rounded-[30px]">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600">We Cover All Categories</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-400 italic">
                Sports. Politics. Entertainments.
              </h3>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}

        {/* Footer */}
        <footer className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="OgaBuzz"
                width={32}
                height={32}
              />
              <span className="text-2xl font-bold text-gray-800">OgaBuzz</span>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} OgaBuzz. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Stay Informed, Stay Ahead
            </p>
          </div>
        </footer>
      </div>
    </Animation>
  );
}
