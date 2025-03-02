const WorkingSection = () => {
  return (
    <section id="workingSpaces" className="mt-10 sm:mt-16 md:mt-20 py-10 sm:py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:justify-between gap-6 md:gap-0">
          <div className="flex w-full flex-col items-start md:w-[60%]">
            <h3 className="text-lg sm:text-xl font-light">Our Co-Working Spaces</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase leading-tight">
              A Workspace That Adapts to <br className="hidden sm:block" />
              Your Needs
            </h2>
          </div>
          <div className="flex items-baseline md:w-[40%]">
            <p className="mt-4 md:mt-10 font-light text-sm sm:text-base text-gray-600">
              Explore our beautifully designed co-working spaces, from private
              offices to open collaborative areas. Socio Space is where
              versatility meets comfort. Find your perfect workspace here.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-2 text-center">
            <div>
              <img
                src="/working1.avif"
                alt="Private Office"
                className="h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <h3 className="text-base sm:text-lg md:text-xl font-light">Private Office</h3>
              <h3 className="text-base sm:text-lg">$59/month</h3>
            </div>
          </div>

          <div className="space-y-2 text-center">
            <div>
              <img
                src="/working2.avif"
                alt="Virtual Office"
                className="h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <h3 className="text-base sm:text-lg md:text-xl font-light">Virtual Office</h3>
              <h3 className="text-base sm:text-lg">$99/month</h3>
            </div>
          </div>

          <div className="space-y-2 text-center">
            <div>
              <img
                src="/working3.avif"
                alt="Flexible Membership"
                className="h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <h3 className="text-base sm:text-lg md:text-xl font-light">Flexible Membership</h3>
              <h3 className="text-base sm:text-lg">$49/month</h3>
            </div>
          </div>

          <div className="space-y-2 text-center">
            <div>
              <img
                src="/working4.avif"
                alt="Hot Desk"
                className="h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <h3 className="text-base sm:text-lg md:text-xl font-light">Hot Desk</h3>
              <h3 className="text-base sm:text-lg">$79/month</h3>
            </div>
          </div>
          
          <div className="space-y-2 text-center sm:col-span-2 md:col-span-1">
            <div>
              <img
                src="/working5.avif"
                alt="Conference Room"
                className="h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <h3 className="text-base sm:text-lg md:text-xl font-light">Conference Room</h3>
              <h3 className="text-base sm:text-lg">$79/month</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingSection;