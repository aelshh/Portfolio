import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectTag = {
  name: string;
  color: string;
};
