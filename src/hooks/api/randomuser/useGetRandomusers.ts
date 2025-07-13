import axios from "axios";
import { useEffect, useState } from "react";

export interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const defaultUsers: RandomUser[] = [
  {
    name: { first: "John", last: "Doe" },
    picture: { large: "/placeholder-avatar.jpg" },
  },
  {
    name: { first: "Jane", last: "Smith" },
    picture: { large: "/placeholder-avatar.jpg" },
  },
  {
    name: { first: "Mike", last: "Johnson" },
    picture: { large: "/placeholder-avatar.jpg" },
  },
  {
    name: { first: "Sarah", last: "Wilson" },
    picture: { large: "/placeholder-avatar.jpg" },
  },
  {
    name: { first: "David", last: "Brown" },
    picture: { large: "/placeholder-avatar.jpg" },
  },
  {
    name: { first: "Lisa", last: "Davis" },
    picture: { large: "/placeholder-avatar.jpg" },
  },
];

interface UseRandomUserOptions {
  count: number;
  enableFetch?: boolean;
  timeout?: number;
}

const useRandomUser = (options: UseRandomUserOptions) => {
  const { count, enableFetch = true, timeout = 10000 } = options;

  const [users, setUsers] = useState<RandomUser[]>(
    defaultUsers.slice(0, count),
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!enableFetch) {
      setIsLoaded(false);
      return;
    }

    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log(`Fetching ${count} random users from API...`);

        const response = await axios.get(
          `https://randomuser.me/api/?results=${count}`,
          {
            timeout,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        );

        console.log("Random User API Response received:", response.data);

        if (response.data && response.data.results) {
          setUsers(response.data.results);
          setIsLoaded(true);
        } else {
          throw new Error("Invalid API response structure");
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
        setUsers(defaultUsers.slice(0, count));
        setIsLoaded(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [count, enableFetch, timeout]);

  return {
    users,
    isLoaded,
    error,
    isLoading,
    getFullName: (user: RandomUser) => `${user.name.first} ${user.name.last}`,
    getInitials: (user: RandomUser) =>
      `${user.name.first[0]}${user.name.last[0]}`.toUpperCase(),
  };
};

export default useRandomUser;
