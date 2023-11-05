import React from "react";

import Header from "./components/Header/Header";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";
import ContentSection from "./components/ContentSection/ContentSection";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

import headshot from "./assets/Headshot.png";
import { UHSHardware, BenaVest, Portfolio } from "./constants/projects";
import { aboutMe, uhsHardware, benaVest, portfolio } from "./constants/content";
import {
  HTMLBadge,
  CSSBadge,
  JavaScriptBadge,
  ReactBadge,
  NodeBadge,
  JQueryBadge,
  JSONBadge,
  LiquidBadge,
  ShopifyBadge,
  WordpressBadge,
  TerminalBadge,
  GitBadge,
  AccessibilityBadge,
  ResponsiveBadge,
  PerformanceBadge
}
  from "./constants/skills";

function App() {
  const { title: heroTitle, role: heroRole, action: heroAction } = { title: "AnthonyPumar", role: '"Web Developer" ', action: "solveProblems" };

  const uhsSkills = [
    HTMLBadge,
    CSSBadge,
    JavaScriptBadge,
    JQueryBadge,
    JSONBadge,
    LiquidBadge,
    ShopifyBadge
  ];

  const benavestSkills = [
    HTMLBadge,
    CSSBadge,
    WordpressBadge
  ];

  const portfolioSkills = [
    HTMLBadge,
    CSSBadge,
    JavaScriptBadge,
    ReactBadge,
    NodeBadge,
    TerminalBadge,
    GitBadge
  ];

  const allSkills = [
    HTMLBadge,
    CSSBadge,
    JavaScriptBadge,
    ReactBadge,
    NodeBadge,
    JQueryBadge,
    JSONBadge,
    LiquidBadge,
    ShopifyBadge,
    WordpressBadge,
    TerminalBadge,
    GitBadge,
    AccessibilityBadge,
    ResponsiveBadge,
    PerformanceBadge
  ];

  return (
    <div>
      <Header title={heroTitle} role={heroRole} action={heroAction} styleClass="hero-header" />
      <Header title="About Me" styleClass="sub-header" />
      <ContentSection title="Anthony" content={aboutMe} image={headshot} skills={[]} compact={false} links={[]} />
      <Header title="Skills" styleClass="sub-header" />
      <SkillsContainer skills={allSkills} />
      <p className="foot-note">*Always baked in.</p>
      <Header title="Contributions" styleClass="sub-header" />
      <ContentSection title="UHS Hardware" date="May 2022 - Present" content={uhsHardware} image={UHSHardware} skills={uhsSkills} compact={true} links={[{link: "https://www.uhs-hardware.com/?gclid=Cj0KCQjw-pyqBhDmARIsAKd9XINW_0d1lTBjY-Kjl7bM_dqYUHcvO_8jWsnQFgU5yYUOuRFmm46dpwoaAoyeEALw_wcB", name:"Live Site"}]} />
      <ContentSection title="BenaVest" date="April 2020 - May 2022" content={benaVest} image={BenaVest} skills={benavestSkills} compact={true} links={[{link: "https://www.benavest.com/", name:"Live Site"}]} />
      <Header title="Projects" styleClass="sub-header" />
      <ContentSection title="Portfolio" content={portfolio} image={Portfolio} skills={portfolioSkills} compact={true} links={[{link: "http://localhost:3000/", name:"Live Site"}, {link: "", name:"GitHub"}]} />
      <Header title="Contact Me" styleClass="sub-header" />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
