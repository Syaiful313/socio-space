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
          <p className="mt-10 text-gray-600 font-light">
            Explore our beautifully designed co-working spaces, from private
            offices to open collaborative areas. Socio Space is where
            versatility meets comfort. Find your perfect workspace here.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-20 gap-6 md:grid-cols-4">
        <div className="space-y-2 text-center">
          <img
            src="/api/placeholder/350/250"
            alt="Private Office"
            className="h-64 w-full rounded-lg object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold">Private Office</h3>
          <p className="text-gray-600">Dedicated spaces for focused work</p>
        </div>

        <div className="space-y-2 text-center">
          <img
            src="/api/placeholder/350/250"
            alt="Virtual Office"
            className="h-64 w-full rounded-lg object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold">Virtual Office</h3>
          <p className="text-gray-600">Flexible working solutions</p>
        </div>

        <div className="space-y-2 text-center">
          <img
            src="/api/placeholder/350/250"
            alt="Flexible Membership"
            className="h-64 w-full rounded-lg object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold">Flexible Membership</h3>
          <p className="text-gray-600">Adapt your workspace as you grow</p>
        </div>

        <div className="space-y-2 text-center">
          <img
            src="/api/placeholder/350/250"
            alt="Hot Desk"
            className="h-64 w-full rounded-lg object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold">Hot Desk</h3>
          <p className="text-gray-600">Collaborative and dynamic workspace</p>
        </div>
      </div>
    </section>
  );
};

export default CoWorkingSpacesSection;
