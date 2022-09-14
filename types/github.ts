export type Repository = {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  private: boolean;
} & Record<string, unknown>;