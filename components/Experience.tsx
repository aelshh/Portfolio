"use client";

import React, { useContext } from "react";
import { SectionHeading } from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

import { useSectionInView } from "@/lib/hooks";
import { useThemeContext } from "@/context/ThemeSwitchContext";

export const Experience = () => {
  const { theme } = useThemeContext();

  const { ref } = useSectionInView("Experience", 0.3);
  return (
    <section
      ref={ref}
      id="experience"
      className="text-center scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "Light" ? "f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "Light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5",
              }}
              date={item.date}
              icon={item.icons}
              iconStyle={{
                background:
                  theme === "Light" ? "white" : "rgba(255,255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!font-normal !mt-0"> {item.location}</p>
              <p className="!font-normal  text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};
