"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <section className="overflow-hidden mx-auto relative min-h-[100vh] bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute z-10 right-0 left-0 top-[140px] md:top-5">
          <h2 className="text-[262.916px] lg:text-[547.559px] mx-auto font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#3b82f6]/10 to-[#06b6d4]/5 text-center">
            404
          </h2>
        </div>
        <div className="absolute -z-50 right-0 left-0 top-[145px] md:-top-4">
          <h2 className="text-[262.916px] lg:text-[547.559px] mx-auto font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#3b82f6]/5 to-[#06b6d4]/5 text-center">
            404
          </h2>
        </div>

        <div className="mt-[200px] md:mt-[100px] relative">
          <p className="absolute top-0 left-0 right-0 text-[100.999px] lg:text-[200.477px] mx-auto font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-transparent from-[#3b82f6]/40 to-[#06b6d4]/20 text-center">
            404
          </p>
          <p className="absolute top-3 lg:top-6 left-0 right-0 text-[100.999px] lg:text-[200.477px] mx-auto font-semibold rotate-[-0.133deg] bg-gradient-to-r bg-clip-text text-[#3b82f6] from-[#3b82f6] to-[#06b6d4] text-center">
            404
          </p>
        </div>

        <div className="mt-[340px] md:mt-[250px] lg:mt-[400px] text-center mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OB</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">OgaBuzz</span>
          </div>
          <h3 className="text-[23px] font-semibold text-gray-800 mb-2">
            Oooops! Page Not Found 😢
          </h3>
          <p className="text-gray-600 text-center mx-auto max-w-sm px-3 text-sm font-medium">
            We can't find the news page you're looking for. Let's get you back
            to the latest headlines.
          </p>

          <Link
            href="/"
            className="relative z-40 cursor-pointer w-[142px] mt-4 md:mt-[27px] mx-auto block"
          >
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.99 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-[22.8px] py-[14.85px] whitespace-nowrap text-[14.5px] font-medium rounded-full"
            >
              Back to home
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
}
