"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button, Image } from "../../components/ui";
import { Animation } from "../../components/global";

export default function ContactUs() {
  return (
    <Animation>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
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

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#1A1A1A]">
                  📬 Contact Us
                </h1>
                <p className="text-xl sm:text-2xl text-[#969696] max-w-3xl mx-auto">
                  Have a question, suggestion, or need help? We're here for you!
                </p>
                <p className="text-lg text-[#969696] max-w-4xl mx-auto">
                  Whether you're reporting an issue, submitting a story, or just
                  want to say hello, the OgaBuzz team is always ready to listen.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-[30px] p-8 sm:p-12 shadow-lg"
                >
                  <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-6">
                    App Related Inquiries
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#229EFF] text-lg">📧</span>
                      <div>
                        <p className="font-semibold text-[#1A1A1A]">Email:</p>
                        <a
                          href="mailto:ogabuzz25@gmail.com"
                          className="text-[#229EFF] hover:text-[#229EFF]/80 transition-colors duration-300"
                        >
                          ogabuzz25@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-[#229EFF] text-lg">📞</span>
                      <div>
                        <p className="font-semibold text-[#1A1A1A]">Phone:</p>
                        <a
                          href="tel:+2348112695212"
                          className="text-[#229EFF] hover:text-[#229EFF]/80 transition-colors duration-300"
                        >
                          +2348112695212
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-[#229EFF] text-lg">🕒</span>
                      <div>
                        <p className="font-semibold text-[#1A1A1A]">Hours:</p>
                        <p className="text-[#1A1A1A]">
                          Monday – Friday, 9:00 AM – 5:00 PM (WAT)
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-[30px] p-8 sm:p-12 shadow-lg"
                >
                  <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-6">
                    General Inquiries
                  </h2>
                  <p className="text-[#1A1A1A] mb-4">
                    For collaboration, press, or media requests, reach out to:
                  </p>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#229EFF] text-lg">📧</span>
                    <div>
                      <a
                        href="mailto:Clearpathmediatv@gmail.com"
                        className="text-[#229EFF] hover:text-[#229EFF]/80 transition-colors duration-300 text-lg font-medium"
                      >
                        Clearpathmediatv@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-[#F7F7F7] rounded-[30px] p-8 sm:p-12"
              >
                <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-6 text-center">
                  💬 Need Help?
                </h2>
                <p className="text-lg text-[#969696] text-center mb-6">
                  Check out our Help Center or chat with us directly in the app.
                </p>
                <div className="text-center">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white rounded-[30px] p-8 sm:p-12 shadow-lg text-center"
              >
                <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-4">
                  Location
                </h2>
                <p className="text-lg text-[#1A1A1A] mb-2">
                  Sani zangon Daura Estate, Kado, Abuja
                </p>
                <p className="text-[#969696]">
                  (We're 100% digital, but our team is proudly Nigerian 💙)
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

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
