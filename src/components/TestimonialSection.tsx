"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Testimonial } from "@/types/testimonial";
import axios from "axios";
import { useEffect, useState } from "react";

const defaultTestimonials: Testimonial[] = [
  {
    name: "Sarah Williams",
    position: "CEO",
    company: "TechPro Innovations",
    quote:
      "Socio Space is where dreams become reality. The collaborative atmosphere and top-notch amenities make it stand out.",
    imageSrc: "/sarah-williams.jpg",
  },
  {
    name: "John Anderson",
    position: "Marketing Director",
    company: "HealthHub Solutions",
    quote:
      "Socio Space is my second home. Flexible plans, great workspaces, and a supportive community have been crucial for my business.",
    imageSrc: "/john-anderson.jpg",
  },
  {
    name: "Emily Turner",
    position: "Founder",
    company: "EcoLiving Essentials",
    quote:
      "Socio Space, a game-changer for our team. Versatile spaces and networking opportunities have boosted productivity and innovation.",
    imageSrc: "/emily-turner.jpg",
  },
];

const TestimonialSection = () => {
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(defaultTestimonials);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=3",
        );

        const companies = [
          "TechPro Innovations",
          "HealthHub Solutions",
          "EcoLiving Essentials",
        ];
        const positions = ["CEO", "Marketing Director", "Founder"];

        const quotes = [
          "Socio Space is where dreams become reality. The collaborative atmosphere and top-notch amenities make it stand out.",
          "Socio Space is my second home. Flexible plans, great workspaces, and a supportive community have been crucial for my business.",
          "Socio Space, a game-changer for our team. Versatile spaces and networking opportunities have boosted productivity and innovation.",
        ];

        const newTestimonials = response.data.results.map(
          (user: any, index: number) => ({
            name: `${user.name.first} ${user.name.last}`,
            position: positions[index],
            company: companies[index],
            quote: quotes[index],
            imageSrc: user.picture.large,
          }),
        );

        setTestimonials(newTestimonials);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoaded(true);
      }
    };

    fetchUserData();
  }, []);

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card className="flex flex-col">
      <CardHeader className="flex items-center justify-center">
        <p className="mt-4 italic text-muted-foreground">
          &quot;{testimonial.quote}&quot;
        </p>
      </CardHeader>
      <CardFooter className="mt-5 flex items-center justify-start">
        <div>
          <Avatar className="h-24 w-24">
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
        <div className="ml-4">
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">
            {testimonial.position} at {testimonial.company}
          </div>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <section className="bg-white py-36">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col justify-between text-left md:flex-row">
          <div className="flex flex-col items-start">
            <h3 className="mb-4 text-lg font-light uppercase">
              Hear What Our Members Have to Say
            </h3>
            <h2 className="mb-4 text-5xl font-light uppercase">
              Success Stories at Socio Space
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-md max-w-2xl font-light">
              Discover how Socio Space has positively impacted our members&apos;
              businesses. Let their success stories inspire your own co-working
              journey.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
