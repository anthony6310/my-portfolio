import React from "react";
import Header from "./components/Header/Header";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";
import ContentSection from "./components/ContentSection/ContentSection";
import Footer from "./components/Footer/Footer";

import { UHSHardware, BenaVest, Portfolio } from "./constants/projects";
import { aboutMe, uhsHardware, benaVest, portfolio } from "./constants/content";
import headshot from "./assets/Headshot.png";

function App() {
  const {title: heroTitle, role: heroRole, action: heroAction} = {title: "AnthonyPumar", role: '"Web Developer" ', action: "solveProblems"};

  return (
    <div>
      <Header title={heroTitle} role={heroRole} action={heroAction} styleClass="hero-header" />
      <Header title="About Me" styleClass="sub-header" />
      <ContentSection title="Anthony" content={aboutMe} image={headshot} />
      <Header title="Skills" styleClass="sub-header" />
      <SkillsContainer />
      <Header title="Contributions" styleClass="sub-header" />
      <ContentSection title="UHS Hardware" date="May 2022 - Present" content={uhsHardware} image={UHSHardware} />
      <ContentSection title="BenaVest" date="April 2020 - May 2022" content={benaVest} image={BenaVest} />
      <Header title="Projects" styleClass="sub-header" />
      <ContentSection title="Portfolio" content={portfolio} image={Portfolio} />
      <Header title="Contact Me" styleClass="sub-header" />
      <Footer />
    </div>
  );
}

export default App;
