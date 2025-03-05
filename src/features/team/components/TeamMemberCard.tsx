import Image from "next/image";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isLoaded: boolean;
  customDescriptions: string[];
}

const TeamMemberCard = ({
  member,
  index,
  isLoaded,
  customDescriptions,
}: TeamMemberCardProps) => (
  <div className="team-member mb-6 rounded-md border-2 border-[#2a2a2a] p-4">
    <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
      {isLoaded ? (
        <Image
          src={member.picture.large}
          alt={`${member.name.first} ${member.name.last}`}
          fill
          className="object-cover"
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

export default TeamMemberCard;