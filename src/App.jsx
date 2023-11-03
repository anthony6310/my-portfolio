import React from "react";
import Header from "./components/Header/Header";
import ContentSection from "./components/ContentSection/ContentSection";
import { aboutMe, uhsHardware, benaVest, portfolio } from "./constants/content";

function App() {
  const {title: heroTitle, role: heroRole, action: heroAction} = {title: "AnthonyPumar", role: '"Web Developer" ', action: "solveProblems"};

  return (
    <div>
      <Header title={heroTitle} role={heroRole} action={heroAction} styleClass="hero-header" />
      <Header title="About Me" styleClass="sub-header" />
      <ContentSection content={aboutMe} />
      <Header title="Skills" styleClass="sub-header" />
      <Header title="Contributions" styleClass="sub-header" />
      <ContentSection content={aboutMe} />
      <ContentSection content={aboutMe} />
      <Header title="Projects" styleClass="sub-header" />
      <ContentSection content={aboutMe} />
      <Header title="Contact Me" styleClass="sub-header" />
    </div>
  );
}

export default App;
