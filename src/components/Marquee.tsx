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
  );
};

export default marquee;
