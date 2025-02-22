import Link from "next/link";

const marquee = () => {
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
        <div className="relative w-full overflow-hidden whitespace-nowrap py-4">
          <div className="animate-marquee flex">
            {[...texts, ...texts].map((text, index) => (
              <span
                key={index}
                className="mx-4 inline-block text-9xl font-semibold"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="mx-auto container  grid space-y-2  py-8 md:pb-48">
          <p className="text-base font-light md:text-2xl">
            Your Co-Working Adventure Begins Now
          </p>
          <p className="text-base font-light md:text-2xl">
            Join Socio Space Today!
          </p>
        </div>
    </div>
  );
};

export default marquee;
