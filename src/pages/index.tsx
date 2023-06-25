import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import WelcomeSection from "../subsections/Welcome";
import AboutMeSection from "../subsections/AboutMe";
import ContactMeSection from "../subsections/ContactMe";
import ExperienceSection from "../subsections/Experience";
import ProjectSection from "../subsections/Projects";
import "../styles/global.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main">
      <WelcomeSection/>
      <AboutMeSection/>
      <ExperienceSection/>
      <ProjectSection/>
      <ContactMeSection/>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Brian Giusti</title>;

