"use client";
import { Button } from "@/components/ui/button";

const BookYourSpaceSection = () => {
  return (
    <section className="bg-gray-50 px-4 py-24 text-center">
      <div className="container mx-auto flex justify-between">
        <div className="flex max-w-3xl flex-col items-start">
          <h2 className="mb-6 text-3xl font-bold">Book Your Favourite Space</h2>
          <p className="mb-8 text-start text-gray-600">
            Don't miss the opportunity to be a part of the Socio Space
            community. Start your co-working adventure with us today and elevate
            your professional life.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="my-auto flex flex-col items-end">
            <Button variant="outline" className="rounded-full border border-gray-800 px-16 py-2">
              Book Now
            </Button>
            <p className="mt-2">Your Co-Working Adventure Begins Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookYourSpaceSection;
