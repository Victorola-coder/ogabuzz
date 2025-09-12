"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, Image } from "../../components/ui";
import { Animation, Footer } from "../../components/global";

export default function PrivacyPolicy() {
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
                  Privacy Policy
                </h1>
                <p className="text-sm text-[#969696]">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <p className="text-xl sm:text-2xl text-[#969696] max-w-3xl mx-auto">
                  OgaBuzz ("we," "our," or "us") respects your privacy and is
                  committed to protecting your personal data. This Privacy
                  Policy explains how we collect, use, and safeguard information
                  when you use the OgaBuzz mobile app, website, and related
                  services (collectively, the "Services").
                </p>
              </div>

              <div className="bg-white rounded-[30px] p-8 sm:p-12 shadow-lg space-y-8">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    1. Information We Collect
                  </h2>
                  <p className="text-[#1A1A1A]">
                    We collect the following types of information when you use
                    OgaBuzz:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>
                      <span className="font-semibold">
                        Personal Information:
                      </span>{" "}
                      When you sign up, we may collect your name, email address,
                      phone number, and profile details.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Device & Location Data:
                      </span>{" "}
                      To provide localized news and community updates, we may
                      collect your approximate or precise location (with your
                      consent).
                    </li>
                    <li>
                      <span className="font-semibold">Usage Data:</span>{" "}
                      Information about how you interact with the app, including
                      the posts you view, share, or create.
                    </li>
                    <li>
                      <span className="font-semibold">
                        User-Generated Content:
                      </span>{" "}
                      Content you submit, such as posts, comments, and images.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-[#1A1A1A]">We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>Provide personalized news and community updates.</li>
                    <li>Enable community reporting and content sharing.</li>
                    <li>Improve app performance and user experience.</li>
                    <li>
                      Enhance safety and security by moderating harmful or
                      unsafe content.
                    </li>
                    <li>
                      Communicate important updates and promotional offers (if
                      you opt in).
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    3. Sharing Your Information
                  </h2>
                  <p className="text-[#1A1A1A]">
                    We do not sell your data. However, we may share your
                    information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>With service providers who help us operate OgaBuzz.</li>
                    <li>If required by law or legal requests.</li>
                    <li>To protect user safety and prevent fraud or abuse.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    4. Location Data Usage
                  </h2>
                  <p className="text-[#1A1A1A]">
                    OgaBuzz uses your location data to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>Recommend local headlines and community posts.</li>
                    <li>
                      Display updates relevant to your city or neighborhood.
                    </li>
                    <li>
                      Help verify reports in your area to improve credibility
                      and security.
                    </li>
                  </ul>
                  <p className="text-[#1A1A1A]">
                    You can disable location access at any time via your device
                    settings, but this may limit some features.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    5. Your Rights
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>Access, update, or delete your data.</li>
                    <li>Withdraw consent for location sharing.</li>
                    <li>
                      Request deletion of your account and all associated data.
                    </li>
                  </ul>
                  <p className="text-[#1A1A1A]">
                    For any requests, contact us at{" "}
                    <a
                      href="mailto:support@ogabuzz.com"
                      className="text-[#229EFF]"
                    >
                      support@ogabuzz.com
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    6. Data Security
                  </h2>
                  <p className="text-[#1A1A1A]">
                    We implement strict measures to protect your data, including
                    encryption, secure servers, and continuous monitoring for
                    unauthorized access.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    7. Children’s Privacy
                  </h2>
                  <p className="text-[#1A1A1A]">
                    OgaBuzz is not intended for children under 13. If we learn
                    we’ve collected personal data from a child, we’ll delete it
                    immediately.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    8. Changes to This Policy
                  </h2>
                  <p className="text-[#1A1A1A]">
                    We may update this Privacy Policy from time to time. We’ll
                    notify you of significant changes by email or through the
                    app.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F7F7] rounded-[30px] p-8 sm:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-4">
                  Need Help?
                </h2>
                <p className="text-lg text-[#969696] mb-6">
                  If you have questions about this policy or your privacy,
                  contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:support@ogabuzz.com"
                    className="bg-[#229EFF] text-white px-8 py-4 rounded-[30px] text-lg font-normal hover:bg-[#229EFF]/90 transition-colors duration-300"
                  >
                    support@ogabuzz.com
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
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </Animation>
  );
}
