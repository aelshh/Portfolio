import { About } from "@/components/About";
import { Intro } from "@/components/Intro";
import { SecitonDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <SecitonDivider />
      <About />
    </main>
  );
}
