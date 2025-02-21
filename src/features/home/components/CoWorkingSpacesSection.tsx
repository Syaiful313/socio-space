const CoWorkingSpacesSection = () => {
  return (
    <section id="workingSpaces" className="mx-auto mt-20 max-w-7xl py-36">
      <div className="mb-12 flex justify-between">
        <div className="flex w-full flex-col items-start md:w-[60%]">
          <h3 className="text-xl font-light">Our Co-Working Spaces</h3>
          <h2 className="text-6xl font-light">
            A Workspace That Adapts to <br />
            Your Needs
          </h2>
        </div>
        <div className="flex items-baseline md:w-[40%]">
          <p className="mt-10 font-light text-gray-600">
            Explore our beautifully designed co-working spaces, from private
            offices to open collaborative areas. Socio Space is where
            versatility meets comfort. Find your perfect workspace here.
          </p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-2 md:grid-cols-4">
        <div className="space-y-2 text-center">
          <div>
            <img
              src="/working1.avif"
              alt="Private Office"
              className="h-96 w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center justify-between pt-5">
            <h3 className="text-xl font-light">Private Office</h3>
            <h3>$59/month</h3>
          </div>
        </div>

        <div className="space-y-2 text-center">
          <div>
            <img
              src="/working2.avif"
              alt="Virtual Office"
              className="h-96 w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center justify-between pt-5">
            <h3 className="text-xl font-light">Virtual Office</h3>
            <h3>$99/month</h3>
          </div>
        </div>

        <div className="space-y-2 text-center">
          <div>
            <img
              src="/working3.avif"
              alt="Flexible Membership"
              className="h-96 w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center justify-between pt-5">
            <h3 className="text-xl font-light">Flexible Membership</h3>
            <h3>$49/month</h3>
          </div>
        </div>

        <div className="space-y-2 text-center">
          <div>
            <img
              src="/working4.avif"
              alt="Hot Desk"
              className="h-96 w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center justify-between pt-5">
            <h3 className="text-xl font-light">Hot Desk</h3>
            <h3>$79/month</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoWorkingSpacesSection;
