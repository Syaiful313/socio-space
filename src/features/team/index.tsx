"use client";

import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import useGetRandomUser from "@/hooks/api/randomuser/useGetRandomusers";
import TeamMemberCard from "./components/TeamMemberCard";
import HeroSection from "./components/HeroSection";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const TeamPage = () => {
  const { teamMembers, isLoaded } = useGetRandomUser(6);

  const fallbackMembers: TeamMember[] = Array(6).fill({
    name: { first: "Team", last: "Member" },
    picture: { large: "/placeholder-avatar.jpg" },
  });

  const customDescriptions = [
    "E-Commerce Extraordinaire",
    "Web Design Wiz",
    "Marketing Strategist",
    "Social Media Maven",
    "Creative Content Catalyst",
    "Analytics Architect",
  ];

  const displayMembers = isLoaded ? teamMembers : fallbackMembers;

  return (
    <>
      <section className="my-10 md:my-20">
        <div className="container mx-auto">
          <HeroSection />

          <div className="grid grid-cols-1 gap-3 mx-2 md:mx-0 md:mt-36 md:grid-cols-3 md:gap-6">
            {displayMembers.slice(0, 3).map((member, index) => (
              <TeamMemberCard
                key={index}
                member={member}
                index={index}
                isLoaded={isLoaded}
                customDescriptions={customDescriptions}
              />
            ))}

            {displayMembers.slice(3, 6).map((member, index) => (
              <TeamMemberCard
                key={index + 3}
                member={member}
                index={index + 3}
                isLoaded={isLoaded}
                customDescriptions={customDescriptions}
              />
            ))}
          </div>
        </div>
      </section>
      <Marquee />
      <Footer />
    </>
  );
};

export default TeamPage;
