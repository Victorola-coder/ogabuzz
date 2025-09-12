import React from "react";
import Link from "next/link";
import { Image } from "../ui";

export default function Footer() {
  return (
    <footer className="px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Image src="/images/logo.png" alt="OgaBuzz" width={32} height={32} />
          <span className="text-2xl font-bold text-gray-800">OgaBuzz</span>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} OgaBuzz. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">Stay Informed, Stay Ahead</p>
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
  );
}
