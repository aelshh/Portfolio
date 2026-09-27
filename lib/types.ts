import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectTag = {
  name: string;
  color: string;
};

export type ExperienceItem = (typeof import("@/lib/data").experiencesData)[number];
export type EducationItem = (typeof import("@/lib/data").educationData)[number];
export type CertificationItem = (typeof import("@/lib/data").certificationsData)[number];
export type AchievementItem = (typeof import("@/lib/data").achievementsData)[number];
