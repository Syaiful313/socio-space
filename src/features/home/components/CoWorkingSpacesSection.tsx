const CoWorkingSpacesSection = () => {
  return (
    <section id="workingSpaces" className="mt-10 md:mt-20 py-16 md:py-24 lg:py-36 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:justify-between gap-6 md:gap-8">
          <div className="flex w-full flex-col items-start md:w-[60%]">
            <h3 className="text-lg md:text-xl font-light">Our Co-Working Spaces</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              A Workspace That Adapts to <br className="hidden sm:block" />
              Your Needs
            </h2>
          </div>
          <div className="flex items-baseline md:w-[40%]">
            <p className="mt-4 md:mt-10 font-light text-gray-600 text-sm sm:text-base">
              Explore our beautifully designed co-working spaces, from private
              offices to open collaborative areas. Socio Space is where
              versatility meets comfort. Find your perfect workspace here.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          <div className="space-y-2">
            <div>
              <img
                src="/working1.avif"
                alt="Private Office"
                className="h-64 sm:h-80 md:h-96 w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-3 md:pt-5">
              <h3 className="text-lg md:text-xl font-light">Private Office</h3>
              <h3 className="text-base md:text-lg">$59/month</h3>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <img
                src="/working2.avif"
                alt="Virtual Office"
                className="h-64 sm:h-80 md:h-96 w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-3 md:pt-5">
              <h3 className="text-lg md:text-xl font-light">Virtual Office</h3>
              <h3 className="text-base md:text-lg">$99/month</h3>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <img
                src="/working3.avif"
                alt="Flexible Membership"
                className="h-64 sm:h-80 md:h-96 w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-3 md:pt-5">
              <h3 className="text-lg md:text-xl font-light">Flexible Membership</h3>
              <h3 className="text-base md:text-lg">$49/month</h3>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <img
                src="/working4.avif"
                alt="Hot Desk"
                className="h-64 sm:h-80 md:h-96 w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-3 md:pt-5">
              <h3 className="text-lg md:text-xl font-light">Hot Desk</h3>
              <h3 className="text-base md:text-lg">$79/month</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoWorkingSpacesSection;