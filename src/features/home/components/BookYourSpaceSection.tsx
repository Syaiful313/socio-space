"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BookYourSpaceSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-12 text-center sm:py-16 md:py-24">
      <div className="container mx-auto flex flex-col justify-between gap-8 md:flex-row md:gap-4">
        <div className="flex max-w-3xl flex-col items-center md:items-start">
          <h2 className="mb-4 text-center text-3xl font-light sm:mb-6 sm:text-4xl md:text-left md:text-5xl">
            Book Your Favourite Space
          </h2>
          <p className="mb-6 text-center text-sm text-gray-600 sm:mb-8 sm:text-base md:text-start">
            Don't miss the opportunity to be a part of the Socio Space
            community. Start your co-working adventure with us today and elevate
            your professional life.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:items-end">
          <div className="flex flex-col items-center md:items-end">
            <Link href="/services">
              <Button
                variant="outline"
                className="rounded-full border border-gray-800 px-8 py-2 text-sm sm:px-12 sm:text-base md:px-16"
              >
                Book Now
              </Button>
            </Link>
            <p className="mt-2 text-xs sm:text-sm">
              Your Co-Working Adventure Begins Now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourSpaceSection;
