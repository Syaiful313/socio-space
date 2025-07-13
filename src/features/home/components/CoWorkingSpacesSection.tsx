"use client";
import { useState } from "react";
import Image from "next/image";

const CoWorkingSpacesSection = () => {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(1);
  
  const spaces = [
    {
      id: 1,
      image: "/working1.avif",
      alt: "Private Office",
      title: "Private Office",
      price: "$59/month",
    },
    {
      id: 2,
      image: "/working2.avif",
      alt: "Virtual Office",
      title: "Virtual Office",
      price: "$99/month",
    },
    {
      id: 3,
      image: "/working3.avif",
      alt: "Flexible Membership",
      title: "Flexible Membership",
      price: "$49/month",
    },
    {
      id: 4,
      image: "/working4.avif",
      alt: "Hot Desk",
      title: "Hot Desk",
      price: "$79/month",
    },
  ];

  const handleImageClick = (spaceId: number) => {
    setSelectedSpace(selectedSpace === spaceId ? null : spaceId);
  };

  return (
    <section
      id="workingSpaces"
      className="mt-10 px-4 py-16 md:mt-20 md:px-6 md:py-24 lg:py-36"
    >
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:justify-between md:gap-8">
          <div className="flex w-full flex-col items-start md:w-[60%]">
            <h3 className="text-lg font-light md:text-xl">
              Our Co-Working Spaces
            </h3>
            <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              A Workspace That Adapts to <br className="hidden sm:block" />
              Your Needs
            </h2>
          </div>
          <div className="flex items-baseline md:w-[40%]">
            <p className="mt-4 text-sm font-light text-gray-600 sm:text-base md:mt-10">
              Explore our beautifully designed co-working spaces, from private
              offices to open collaborative areas. Socio Space is where
              versatility meets comfort. Find your perfect workspace here.
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-2 md:mt-20 md:gap-4">
          {spaces.map((space) => {
            const isSelected = selectedSpace === space.id;
            const isAnySelected = selectedSpace !== null;
            const isOtherSelected = isAnySelected && !isSelected;
            return (
              <div
                key={space.id}
                className={`cursor-pointer space-y-2 transition-all duration-500 ease-in-out ${
                  isSelected
                    ? "flex-[2]"
                    : isOtherSelected
                    ? "flex-[0.7]"
                    : "flex-1"
                }`}
                onClick={() => handleImageClick(space.id)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={space.image}
                    alt={space.alt}
                    width={800}
                    height={600}
                    className="h-64 w-full rounded-lg object-cover transition-all duration-500 sm:h-80 md:h-96"
                  />
                </div>
                <div className="flex items-center justify-between pt-3 transition-all duration-500 md:pt-5">
                  <h3 className="text-lg font-light md:text-xl">
                    {space.title}
                  </h3>
                  {isSelected && (
                    <h3 className="text-base md:text-lg">{space.price}</h3>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoWorkingSpacesSection;