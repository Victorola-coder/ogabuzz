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

        <section className="px-4 relative pt-[54px] pb-[28px] bg-[#F7F7F7] mx-[144px] flex flex-col items-center justify-center rounded-[30px]">
          <h4 className="text-[#969696] text-[15px] font-normal text-center leading-[140%]">
            we cover all categories
          </h4>
          <h2 className="text-[#B7B7B7] text-[70px] leading-[140%] capitalize italic text-center font-normal">
            Sports. Politics. Entertainments.
          </h2>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Our Features
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Feature 1: Daily Headlines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    Daily Headlines
                  </h3>
                  <h4 className="text-xl font-bold text-gray-900">From</h4>
                  <div className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-full">
                    <span className="font-bold">100+ Sources</span>
                  </div>
                </div>
                <div className="mx-auto w-64 h-80 bg-gray-900 rounded-3xl p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-blue-50 to-white p-4">
                      <div className="space-y-3">
                        <div className="text-xs font-medium text-gray-600">
                          Top Headlines
                        </div>
                        <div className="space-y-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="bg-white rounded-lg shadow-sm p-3"
                            >
                              <div className="flex space-x-2">
                                <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                                  <span className="text-white text-xs">📰</span>
                                </div>
                                <div className="flex-1">
                                  <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2: Community Updates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">Community</h3>
                  <h4 className="text-xl font-bold text-gray-900">Updates</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Get Updated On What Is Going On Around Your Location, Thanks
                    To Our Local News Champions
                  </p>
                </div>
                <div className="mx-auto w-64 h-80 bg-gray-900 rounded-3xl p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-green-50 to-white p-4">
                      <div className="space-y-3">
                        <div className="text-xs font-medium text-gray-600">
                          Local News
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-3">
                          <div className="h-24 bg-gradient-to-r from-orange-200 to-yellow-200 rounded mb-2"></div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gray-200 rounded"></div>
                            <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3: Earn From Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    Earn From Your
                  </h3>
                  <h4 className="text-xl font-bold text-gray-900">Posts</h4>
                  <p className="text-sm text-gray-600 max-w-sm mx-auto">
                    Monetize Your Posts And Videos Based On Engagements
                  </p>
                </div>
                <div className="mx-auto w-64 h-80 bg-gray-900 rounded-3xl p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-green-50 to-white p-4">
                      <div className="space-y-3">
                        <div className="text-xs font-medium text-gray-600">
                          Earnings
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-4">
                          <div className="text-2xl font-bold text-green-600">
                            ₦54,090.23
                          </div>
                          <div className="text-xs text-gray-500">
                            Total Weekly Earnings
                          </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-3">
                          <div className="text-sm font-medium text-gray-700">
                            Engagements In The Last 1 Month
                          </div>
                          <div className="text-lg font-bold text-blue-600">
                            4,090
                          </div>
                          <div className="h-8 bg-gradient-to-r from-blue-200 to-green-200 rounded mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
