import { About } from "@/components/About";
import { Intro } from "@/components/Intro";
import { SecitonDivider } from "@/components/SectionDivider";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import { Experience } from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro></Intro>
      <SecitonDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
