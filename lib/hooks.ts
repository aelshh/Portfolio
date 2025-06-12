import useActiveSectionContext from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";
import { useEffect } from "react";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return { ref };
}
