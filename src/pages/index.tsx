import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import WelcomeSection from "../subsections/Welcome";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <WelcomeSection />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Brian Giusti</title>;
