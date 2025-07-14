"use client";

import React from "react";
import { useState } from "react";
import { Button, Image } from "./components/ui";
import { motion } from "framer-motion";
import { Animation } from "./components/global";

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
            <Button
              variant="primary"
              className="border-primary text-white px-6 py-2 rounded-full"
            >
              Download Now
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                  Stay Informed
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700">
                  Stay Ahead With OgaBuzz
                </h2>
              </div>

              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl text-gray-600 font-medium">
                  OgaBuzz Is The First News App Built For You
                </p>
                <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
                  Personalized Headlines And Real-Time Local Reporting, Powered
                  By AI And Your Location
                </p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button
                  variant="primary"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium flex items-center space-x-2 w-full sm:w-auto"
                >
                  <span>📱</span>
                  <span>Download for iPhone</span>
                </Button>
                <Button
                  variant="secondary"
                  className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium flex items-center space-x-2 w-full sm:w-auto"
                >
                  <span>🤖</span>
                  <span>Download For Android</span>
                </Button>
              </div>

              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pt-12"
              >
                <div className="relative mx-auto w-72 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-full bg-gradient-to-b from-blue-50 to-white p-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                          <span className="text-sm font-medium">OgaBuzz</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-16 bg-white rounded-lg shadow-sm p-3">
                            <div className="flex space-x-2">
                              <div className="w-10 h-10 bg-gray-200 rounded"></div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                              </div>
                            </div>
                          </div>
                          <div className="h-16 bg-white rounded-lg shadow-sm p-3">
                            <div className="flex space-x-2">
                              <div className="w-10 h-10 bg-gray-200 rounded"></div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                              </div>
                            </div>
                          </div>
                          <div className="h-16 bg-white rounded-lg shadow-sm p-3">
                            <div className="flex space-x-2">
                              <div className="w-10 h-10 bg-gray-200 rounded"></div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600">We Cover All Categories</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 italic">
                Sports. Politics. Entertainments.
              </h3>
            </motion.div>
          </div>
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
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OB</span>
              </div>
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
