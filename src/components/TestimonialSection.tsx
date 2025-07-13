"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import useRandomUser from "@/hooks/api/randomuser/useGetRandomusers";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  imageSrc: string;
}

const testimonialData = {
  companies: [
    "TechPro Innovations",
    "HealthHub Solutions",
    "EcoLiving Essentials",
  ],
  positions: ["CEO", "Marketing Director", "Founder"],
  quotes: [
    "Socio Space is where dreams become reality. The collaborative atmosphere and top-notch amenities make it stand out.",
    "Socio Space is my second home. Flexible plans, great workspaces, and a supportive community have been crucial for my business.",
    "Socio Space, a game-changer for our team. Versatile spaces and networking opportunities have boosted productivity and innovation.",
  ],
};

const TestimonialSection = () => {
  const { users, error, getFullName } = useRandomUser({
    count: 3,
    enableFetch: true,
    timeout: 10000,
  });

  const testimonials: Testimonial[] = users.map((user, index) => ({
    name: getFullName(user),
    position: testimonialData.positions[index],
    company: testimonialData.companies[index],
    quote: testimonialData.quotes[index],
    imageSrc: user.picture.large,
  }));

  if (error) {
    console.warn("Testimonial API Error:", error);
  }

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card className="flex flex-col">
      <CardHeader className="flex items-center justify-center">
        <p className="mt-2 text-sm italic text-muted-foreground sm:mt-4 sm:text-base">
          &quot;{testimonial.quote}&quot;
        </p>
      </CardHeader>
      <CardFooter className="mt-3 flex items-center justify-start sm:mt-5">
        <div>
          <Avatar className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24">
            <AvatarImage
              src={testimonial.imageSrc}
              alt={testimonial.name}
              className="object-cover"
            />
            <AvatarFallback>
              {testimonial.name
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="ml-3 sm:ml-4">
          <div className="text-sm font-semibold sm:text-base">
            {testimonial.name}
          </div>
          <div className="text-xs text-muted-foreground sm:text-sm">
            {testimonial.position} at {testimonial.company}
          </div>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <section className="bg-white px-4 py-12 sm:py-24 md:px-6 md:py-36">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col justify-between gap-4 text-left sm:mb-12 sm:gap-6 md:flex-row">
          <div className="flex flex-col items-start">
            <h3 className="mb-2 text-base font-light uppercase sm:mb-4 sm:text-lg">
              Hear What Our Members Have to Say
            </h3>
            <h2 className="mb-2 text-3xl font-light uppercase leading-tight sm:mb-4 sm:text-4xl md:text-5xl">
              Success Stories at Socio Space
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="md:text-md max-w-2xl text-sm font-light sm:text-base">
              Discover how Socio Space has positively impacted our members&apos;
              businesses. Let their success stories inspire your own co-working
              journey.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
