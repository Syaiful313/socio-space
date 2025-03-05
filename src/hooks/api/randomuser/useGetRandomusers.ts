import { useEffect, useState } from "react";
import axios from "axios";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const useGetRandomUser = (count: number) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${count}`
        );
        setTeamMembers(response.data.results);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setIsLoaded(true);
      }
    };

    fetchTeamData();
  }, [count]);

  return { teamMembers, isLoaded };
};

export default useGetRandomUser;