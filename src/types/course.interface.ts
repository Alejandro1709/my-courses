export interface ICourse {
  id: number;
  name: string;
  code: string;
  description?: string;
  professor: string;
  schedule: string;
  room: string;
  credits: number;
  progress: number;
  grade: string;
  status: "in-progress" | "completed" | "not-started";
  color: string;
}
