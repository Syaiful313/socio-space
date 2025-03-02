"use client";
import { Button } from "@/components/ui/button";

const BookYourSpaceSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:py-16 md:py-24 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-4">
        <div className="flex max-w-3xl flex-col items-center md:items-start">
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-light text-center md:text-left">
            Book Your Favourite Space
          </h2>
          <p className="mb-6 sm:mb-8 text-center md:text-start text-gray-600 text-sm sm:text-base">
            Don't miss the opportunity to be a part of the Socio Space
            community. Start your co-working adventure with us today and elevate
            your professional life.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="flex flex-col items-center md:items-end">
            <Button 
              variant="outline" 
              className="rounded-full border border-gray-800 px-8 sm:px-12 md:px-16 py-2 text-sm sm:text-base"
            >
              Book Now
            </Button>
            <p className="mt-2 text-xs sm:text-sm">Your Co-Working Adventure Begins Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourSpaceSection;