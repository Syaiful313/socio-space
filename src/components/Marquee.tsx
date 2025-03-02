import Link from "next/link";

const Marquee = () => {
  const texts: string[] = [
    "GET IN TOUCH",
    "GET IN TOUCH",
    "GET IN TOUCH",
    "GET IN TOUCH",
    "GET IN TOUCH",
    "GET IN TOUCH",
    "GET IN TOUCH",
    "GET IN TOUCH",
    "GET IN TOUCH",
  ];

  return (
    <div>
      <Link href="/contact">
        <div className="relative w-full overflow-hidden whitespace-nowrap py-2 sm:py-3 md:py-4">
          <div className="animate-marquee flex">
            {[...texts, ...texts].map((text, index) => (
              <span
                key={index}
                className="mx-2 sm:mx-3 md:mx-4 inline-block text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-semibold"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="container mx-auto px-4 grid space-y-1 sm:space-y-2 py-6 sm:py-8 md:pb-24 lg:pb-48">
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-light">
          Your Co-Working Adventure Begins Now
        </p>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-light">
          Join Socio Space Today!
        </p>
      </div>
    </div>
  );
};

export default Marquee;