import React from "react";

import Header from "./components/Header/Header";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";
import ContentSection from "./components/ContentSection/ContentSection";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

import headshot from "./assets/Headshot.png";
import { UHSHardware, BenaVest, Portfolio } from "./constants/projectImages";
import { aboutMe, uhsHardware, benaVest, portfolio } from "./constants/content";
import { uhsSkills, benavestSkills, portfolioSkills, allSkills } from "./constants/skillImages";

function App() {
  const { title: heroTitle, role: heroRole, action: heroAction } = { title: "AnthonyPumar", role: '"Web Developer" ', action: "solveProblems" };
  const uhsLinks = [{link: "https://www.uhs-hardware.com/", name:"Live Site"}];
  const benavestLinks = [{link: "https://www.benavest.com/", name:"Live Site"}];
  const portfolioLinks = [{link: "https://github.com/anthony6310/my-portfolio", name:"GitHub"}];

  return (
    <div>
      <Header title={heroTitle} role={heroRole} action={heroAction} styleClass="hero-header" />
      <Header title="About Me" styleClass="sub-header" />
      <ContentSection title="Anthony" content={aboutMe} image={headshot} skills={[]} compact={true} links={[]} />
      <Header title="Skills" styleClass="sub-header" />
      <SkillsContainer skills={allSkills} />
      <p className="foot-note">*Always baked in.</p>
      <Header title="Contributions" styleClass="sub-header" />
      <ContentSection title="UHS Hardware" date="May 2022 - Present" content={uhsHardware} image={UHSHardware} skills={uhsSkills} compact={true} links={uhsLinks} />
      <ContentSection title="BenaVest" date="April 2020 - May 2022" content={benaVest} image={BenaVest} skills={benavestSkills} compact={true} links={benavestLinks} />
      <Header title="Projects" styleClass="sub-header" />
      <ContentSection title="Portfolio" content={portfolio} image={Portfolio} skills={portfolioSkills} compact={true} links={portfolioLinks} />
      <Header title="Contact Me" styleClass="sub-header" />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
