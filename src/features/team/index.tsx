"use client";

import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import useRandomUser, {
  RandomUser,
} from "@/hooks/api/randomuser/useGetRandomusers";
import HeroSection from "./components/HeroSection";
import TeamMemberCard from "./components/TeamMemberCard";

interface TeamMember extends RandomUser {}

const TeamPage = () => {
  const { users, isLoaded } = useRandomUser({
    count: 6,
    enableFetch: true,
    timeout: 10000,
  });

  const customDescriptions = [
    "E-Commerce Extraordinaire",
    "Web Design Wiz",
    "Marketing Strategist",
    "Social Media Maven",
    "Creative Content Catalyst",
    "Analytics Architect",
  ];

  const teamMembers: TeamMember[] = users;

  return (
    <>
      <HeroSection />
      <section className="my-10 md:my-20" id="team">
        <div className="container mx-auto">
          <div className="mx-2 grid grid-cols-1 gap-3 md:mx-0 md:mt-36 md:grid-cols-3 md:gap-6">
            {teamMembers.slice(0, 3).map((member, index) => (
              <TeamMemberCard
                key={`top-${index}`}
                member={member}
                index={index}
                isLoaded={isLoaded}
                customDescriptions={customDescriptions}
              />
            ))}

            {teamMembers.slice(3, 6).map((member, index) => (
              <TeamMemberCard
                key={`bottom-${index + 3}`}
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
