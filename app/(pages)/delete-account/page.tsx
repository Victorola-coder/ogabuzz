"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Animation } from "../../components/global";
import { Button, Image } from "../../components/ui";

export default function DeleteAccount() {
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
            <button className="border-primary bg-none border rounded-[30px] text-[#229EFF] px-[40px] py-[16px] text-[15px] font-normal">
              Download Now
            </button>
          </div>
        </header>

        {/* Main Content */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Page Title */}
              <div className="text-center space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1A1A]">
                  Delete Your Account
                </h1>
                <p className="text-xl sm:text-2xl text-[#969696] max-w-2xl mx-auto">
                  We're sorry to see you go. If you'd like to delete your
                  OgaBuzz account, you can do so easily by following the steps
                  below.
                </p>
              </div>

              {/* Main Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[30px] p-8 sm:p-12 shadow-lg"
              >
                {/* How to Delete Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A]">
                    How to Delete Your Account
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#229EFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <p className="text-lg text-[#1A1A1A] pt-1">
                        Open the OgaBuzz app.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#229EFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <p className="text-lg text-[#1A1A1A] pt-1">
                        Go to your Profile tab.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#229EFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <p className="text-lg text-[#1A1A1A] pt-1">
                        Tap on Settings.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#229EFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <p className="text-lg text-[#1A1A1A] pt-1">
                        Select Delete Account at the bottom of the screen.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#229EFF] text-white rounded-full flex items-center justify-center font-bold text-sm">
                        5
                      </div>
                      <p className="text-lg text-[#1A1A1A] pt-1">
                        Confirm your decision to permanently delete your
                        account.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Warning Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 p-6 bg-red-50 border border-red-200 rounded-[20px]"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center">
                      ⚠️
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-800 mb-2">
                        Important Note
                      </h3>
                      <p className="text-red-700">
                        Deleting your account is permanent and cannot be undone.
                        All your data, posts, preferences, and history will be
                        permanently erased.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Help Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-[#F7F7F7] rounded-[30px] p-8 sm:p-12 text-center"
              >
                <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-4">
                  Need Help?
                </h2>
                <p className="text-lg text-[#969696] mb-6">
                  If you experience any issues while deleting your account or
                  have questions, please contact us at:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:Hello@ogabuzz.com"
                    className="bg-[#229EFF] text-white px-8 py-4 rounded-[30px] text-lg font-normal hover:bg-[#229EFF]/90 transition-colors duration-300"
                  >
                    Hello@ogabuzz.com
                  </a>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.history.back()}
                    className="border-[#229EFF] text-[#229EFF] hover:bg-[#229EFF] hover:text-white transition-colors duration-300"
                  >
                    Go Back
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 mt-16">
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
            <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/privacy_policy"
                className="text-[#229EFF] hover:text-[#229EFF]/80 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/terms"
                className="text-[#229EFF] hover:text-[#229EFF]/80 text-sm transition-colors duration-300"
              >
                Terms
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/contact-us"
                className="text-[#229EFF] hover:text-[#229EFF]/80 text-sm transition-colors duration-300"
              >
                Contact Us
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/delete-account"
                className="text-[#229EFF] hover:text-[#229EFF]/80 text-sm transition-colors duration-300"
              >
                Delete Account
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Animation>
  );
}
