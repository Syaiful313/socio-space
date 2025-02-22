import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardFooter,
    CardHeader
} from "@/components/ui/card";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  imageSrc: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Williams",
      position: "CEO",
      company: "TechPro Innovations",
      quote:
        "Socio Space is where dreams become reality. The collaborative atmosphere and top-notch amenities make it stand out.",
      imageSrc: "/sarah-williams.jpg", // Replace with actual image path
    },
    {
      name: "John Anderson",
      position: "Marketing Director",
      company: "HealthHub Solutions",
      quote:
        "Socio Space is my second home. Flexible plans, great workspaces, and a supportive community have been crucial for my business.",
      imageSrc: "/john-anderson.jpg", // Replace with actual image path
    },
    {
      name: "Emily Turner",
      position: "Founder",
      company: "EcoLiving Essentials",
      quote:
        "Socio Space, a game-changer for our team. Versatile spaces and networking opportunities have boosted productivity and innovation.",
      imageSrc: "/emily-turner.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="bg-white py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex justify-between text-left">
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
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex items-center justify-center">
                <p className="mt-4 italic text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardHeader>
              <CardFooter className="flex justify-start items-center mt-5">
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
                <div className="">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
