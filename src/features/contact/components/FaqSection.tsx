"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqItems: FAQItem[] = [
    {
      question: "1/What is Co-working, and How Does it Work at Socio Space?",
      answer:
        "Co-working is a flexible workspace solution where individuals from different companies or freelancers share a common working environment. At Socio Space, we provide a collaborative, fully-equipped workspace that allows professionals to work independently while enjoying community benefits, networking opportunities, and access to shared amenities.",
    },
    {
      question: "2/What Amenities are Included in My Membership?",
      answer:
        "Our membership includes high-speed internet, access to meeting rooms, printing facilities, complimentary coffee and refreshments, ergonomic workstations, communal kitchen, lounge areas, and 24/7 secure access. Depending on your membership tier, you'll also enjoy additional perks like dedicated desks or private office options.",
    },
    {
      question:
        "3/Can I Book a Meeting Room Even if I'm Not a Private Office Member?",
      answer:
        "Yes! Meeting room bookings are available to all our members. Depending on your membership plan, you'll receive a certain number of free meeting room hours. Additional hours can be booked at competitive rates. Our booking system makes it easy to reserve spaces for client meetings, team collaborations, or focused work sessions.",
    },
    {
      question: "4/Are There Any Hidden Costs or Additional Fees?",
      answer:
        "Transparency is key at Socio Space. Our pricing is straightforward with no hidden fees. The membership fee covers most standard amenities. Any additional services like extra printing, advanced meeting room bookings, or specialized equipment rentals are clearly communicated upfront. We believe in providing clear, value-driven pricing.",
    },
    {
      question:
        "5/What are the Networking Events Like, and How Often Do They Occur?",
      answer:
        "We host a variety of networking events to foster community and professional growth. These include monthly industry mixer workshops, weekly skill-sharing sessions, quarterly networking breakfasts, and occasional guest speaker events. Events occur 2-4 times per month, providing ample opportunities to connect, learn, and expand your professional network.",
    },
  ];

  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center md:mb-12">
            <h3 className="md:text-md mb-2 text-sm font-light uppercase md:mb-4">
              Discover the Information You Need
            </h3>
            <h2 className="text-xl font-light uppercase sm:text-2xl md:text-4xl">
              Your Questions, Answered
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-2 md:space-y-4"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200"
              >
                <AccordionTrigger className="py-3 text-left text-base font-medium transition-colors hover:text-primary hover:no-underline sm:text-lg md:py-4 md:text-xl">
                  <span className="flex w-full items-center justify-between">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pr-2 text-sm leading-relaxed text-gray-600 md:pr-4 md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
