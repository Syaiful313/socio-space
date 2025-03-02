"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Spacious parking area",
    image: "/premium1.avif",
  },
  {
    title: "Comfortable spaces",
    image: "/premium2.avif",
  },
  {
    title: "Cozy cafe",
    image: "/premium3.avif",
  },
  {
    title: "Outdoor spaces",
    image: "/premium4.avif",
  },
];

const PremiumAmenitiesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="my-24">
      <div className="container mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Left column - Text content */}
          <div className="py-12">
            <p className="mb-2 text-xs uppercase">
              EFFICIENCY AND COMFORT AT YOUR FINGERTIPS
            </p>
            <h1 className="text-5xl font-light">
              ELEVATE YOUR WORK
              <br />
              EXPERIENCE WITH PREMIUM
              <br />
              AMENITIES
            </h1>
          </div>

          {/* Right column - Button */}
          <div className="flex items-center justify-end">
            <Link href="/workspaces">
              <Button className="rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800">
                MORE FACILITIES
              </Button>
            </Link>
          </div>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {/* Left column - Feature navigation */}
          <div className="relative p-6">
            {/* Slider counter */}
            <div className="absolute left-6 top-6">
              <span className="text-sm opacity-70">
                {String(activeFeature + 1).padStart(2, "0")} /{" "}
                {String(features.length).padStart(2, "0")}
              </span>
            </div>

            {/* Vertical line */}
            <div className="absolute bottom-16 left-12 top-16 w-px bg-black opacity-20"></div>

            {/* Feature list */}
            <div className="mt-16 space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`cursor-pointer pl-10 transition-all duration-300 ${
                    activeFeature === index
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-80"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <h2
                    className={`text-xl font-normal ${
                      activeFeature === index
                        ? "bg-black px-4 py-2 text-white"
                        : ""
                    }`}
                  >
                    {feature.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Feature image */}
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <Image
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAmenitiesSection;
