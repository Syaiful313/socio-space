"use client";

import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6",
        );
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeamData();
  }, []);

  const customDescriptions = [
    "E-Commerce Extraordinaire",
    "Web Design Wiz",
    "Marketing Strategist",
    "Social Media Maven",
    "Creative Content Catalyst",
    "Analytics Architect",
  ];

  return (
    <>
      <section>
        <div className="teams-page mx-5 min-h-screen max-w-7xl md:mx-auto">
          <h1 className="mb-8 text-4xl font-light md:mt-10 md:text-8xl">Meet Our Team</h1>
          <div className="team-grid grid grid-cols-3 gap-6 md:mt-36">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="team-member rounded-md border-2 border-[#2a2a2a] p-4"
              >
                <Image
                  className="mx-auto mb-4 rounded-full grayscale filter"
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={128}
                  height={128}
                  objectFit="cover"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{`${member.name.first} ${member.name.last}`}</h2>
                  <p>{customDescriptions[index]}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="team-grid mt-8 grid grid-cols-3 gap-6">
            {teamMembers.slice(3, 6).map((member, index) => (
              <div
                key={index}
                className="team-member rounded-md border-2 border-[#2a2a2a] p-4"
              >
                <Image
                  className="mx-auto mb-4 rounded-full grayscale filter"
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={128}
                  height={128}
                  objectFit="cover"
                />
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{`${member.name.first} ${member.name.last}`}</h2>
                  <p>{customDescriptions[index]}</p>
                </div>
              </div>
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
