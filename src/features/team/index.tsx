"use client";

import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

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

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6",
        );
        setTeamMembers(response.data.results);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setTeamMembers(fallbackMembers);
        setIsLoaded(true);
      }
    };

    fetchTeamData();
  }, []);

  const displayMembers = isLoaded ? teamMembers : fallbackMembers;

  const TeamMemberCard = ({
    member,
    index,
  }: {
    member: TeamMember;
    index: number;
  }) => (
    <div className="team-member mb-6 rounded-md border-2 border-[#2a2a2a] p-4">
      <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
        {isLoaded ? (
          <Image
            src={member.picture.large}
            alt={`${member.name.first} ${member.name.last}`}
            fill
            className="object-cover grayscale"
          />
        ) : (
          <div className="h-full w-full animate-pulse rounded-full bg-gray-200"></div>
        )}
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          {member.name.first} {member.name.last}
        </h2>
        <p>{customDescriptions[index % customDescriptions.length]}</p>
      </div>
    </div>
  );

  return (
    <>
      <section>
        <div className="teams-page mx-5 min-h-screen max-w-7xl md:mx-auto">
          <h1 className="mb-8 text-4xl font-light md:mt-10 md:text-8xl">
            Meet Our Team
          </h1>

          <div className="grid grid-cols-1 gap-6 md:mt-36 md:grid-cols-3">
            {displayMembers.slice(0, 3).map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}

            {displayMembers.slice(3, 6).map((member, index) => (
              <TeamMemberCard
                key={index + 3}
                member={member}
                index={index + 3}
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
