"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, Image } from "../../components/ui";
import { Animation, Footer } from "../../components/global";

export default function TermsOfUse() {
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
                  Terms of Use
                </h1>
                <p className="text-sm text-[#969696]">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <p className="text-xl sm:text-2xl text-[#969696] max-w-3xl mx-auto">
                  These Terms of Use ("Terms") govern your access to and use of
                  the OgaBuzz mobile app, website, and related services
                  ("Services"). By using OgaBuzz, you agree to these Terms.
                </p>
              </div>

              <div className="bg-white rounded-[30px] p-8 sm:p-12 shadow-lg space-y-8">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    1. Eligibility
                  </h2>
                  <p className="text-[#1A1A1A]">
                    You must be at least 13 years old to use OgaBuzz. By using
                    the app, you represent that you meet this requirement.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    2. Account Registration
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>Provide accurate and up-to-date information.</li>
                    <li>Keep your login credentials secure.</li>
                    <li>
                      Accept responsibility for all activity under your account.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    3. User-Generated Content
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>
                      Do not share false, harmful, or misleading information.
                    </li>
                    <li>Do not post abusive, hateful, or unsafe content.</li>
                    <li>
                      You retain ownership of your content but grant OgaBuzz a
                      non-exclusive, royalty-free license to display,
                      distribute, and promote it on the platform.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    4. Community Reporting Guidelines
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>All reports must be accurate and verifiable.</li>
                    <li>
                      False reporting or impersonation may lead to suspension or
                      removal.
                    </li>
                    <li>
                      OgaBuzz may flag, remove, or fact-check reports to
                      maintain community safety.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    5. Prohibited Activities
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-[#1A1A1A]">
                    <li>Do not use OgaBuzz for unlawful purposes.</li>
                    <li>Do not harass, exploit, or harm other users.</li>
                    <li>
                      Do not attempt to hack, reverse engineer, or disrupt the
                      platform.
                    </li>
                    <li>Violations may lead to account termination.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-[#1A1A1A]">
                    OgaBuzz provides information "as is" and does not guarantee
                    the accuracy, completeness, or timeliness of news or
                    reports. We are not liable for damages arising from reliance
                    on user-generated content.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl text-[#1A1A1A]">
                    7. Termination
                  </h2>
                  <p className="text-[#1A1A1A]">
                    We may suspend or terminate your account if you violate
                    these Terms or engage in harmful behavior on the platform.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F7F7] rounded-[30px] p-8 sm:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-4">
                  Need Help?
                </h2>
                <p className="text-lg text-[#969696] mb-6">
                  If you have questions about these Terms, contact us:
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
