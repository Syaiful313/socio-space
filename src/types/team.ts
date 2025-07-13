import { RandomUser } from "./user";

// types/team.ts
export interface TeamMember extends RandomUser {
  // Additional team member specific properties can be added here
}

// Hook options interface
export interface UseRandomUserOptions {
  count: number;
  enableFetch?: boolean;
  timeout?: number;
}