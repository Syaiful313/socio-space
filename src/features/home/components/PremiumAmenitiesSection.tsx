"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const amenities = [
  "Spacious parking area",
  "Comfortable spaces",
  "Cozy cafe",
  "Outdoor spaces",
];

const PremiumAmenitiesSection = () => {
  const [currentAmenityIndex, setCurrentAmenityIndex] = useState(0);

  return (
    <section className="flex w-full items-center justify-center bg-white px-4 py-12 lg:px-16">
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8">
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-between">
            <p className="text-xs uppercase tracking-wider text-gray-600">
              Efficiency and Comfort at Your Fingertips
            </p>
            <h1 className="text-4xl font-light text-gray-900 md:text-5xl">
              Elevate Your Work Experience
              <br />
              with Premium Amenities
            </h1>
          </div>
          <div className="flex items-center">
            <Button className="rounded-full bg-black px-10 py-4 text-white transition-colors hover:bg-gray-800">
              More Facilities
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 my-10 justify-between overflow-hidden rounded-lg">
          <div className="space-y-4">
            {amenities.map((amenity, index) => (
              <div
                key={amenity}
                className={`cursor-pointer rounded-lg p-4 transition-all duration-300 ${
                  currentAmenityIndex === index
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                onClick={() => setCurrentAmenityIndex(index)}
              >
                {amenity}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PremiumAmenitiesSection;
