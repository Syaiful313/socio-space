"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutSocioSpace = () => {
  return (
    <section id="aboutSection" className="container mx-auto py-12 sm:py-16 md:py-20 lg:py-28 px-4 md:px-6">
      <div className="grid w-full grid-cols-1 gap-8 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* First Column - Image with Overlay */}
        <div className="grid grid-cols-1 gap-4">
          <h1 className="text-2xl sm:text-3xl font-light">About Socio Space</h1>
          <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
            <Image
              src="/about1.avif"
              alt="Socio Space Workspace Interior"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-light text-sm sm:text-base">
            Learn about our mission, values, and what sets Socio Space apart.
            We're committed to providing a supportive, inspiring community for
            professionals like you. Join us to experience a co-working space
            like no other.
          </p>
        </div>

        {/* Second Column - Main Content */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-full md:order-last lg:order-none">
          <Image
            src="/about2.avif"
            alt="Socio Space Collaborative Space"
            fill
            className="object-cover"
          />
        </div>

        {/* Third Column - Text Content */}
        <div className="flex justify-center md:col-span-2 lg:col-span-1">
          <div className="w-full space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-gray-900">
              Elevate Your Work Experience
            </h1>
            <h2 className="text-base sm:text-lg font-light">
              Discover the Essence of Socio Space — Our Mission, Values, and
              What Makes Us Unique.
            </h2>

            <p className="text-sm sm:text-base font-light">
              At Socio Space, our mission is to foster a collaborative
              environment that fuels creativity and productivity. Our core
              values are rooted in community, innovation, and support.
              We&apos;re dedicated to creating a space where professionals like
              you can thrive, grow, and network. Join us today to immerse
              yourself in a co-working experience that transcends the ordinary,
              and embark on a journey of professional and personal growth.
            </p>

            <div className="pt-2 sm:pt-4">
              <Button className="rounded-full px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-light">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSocioSpace;