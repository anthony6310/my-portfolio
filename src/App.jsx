import React from "react";

//Component imports
import Header from "./components/Header/Header";
import SkillsContainer from "./components/SkillsContainer/SkillsContainer";
import ContentSection from "./components/ContentSection/ContentSection";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

//Asset imports
import headshot from "./assets/Headshot.png";
import { UHSHardware, BenaVest, Portfolio, Aroma360 } from "./constants/projectImages";
import { aboutMe, uhsHardware, benaVest, portfolio, aroma360 } from "./constants/content";
import { uhsSkills, benavestSkills, portfolioSkills, allSkills, aroma360Skills } from "./constants/skillImages";

function App() {
  // Constant needed to display the proper Heading for the hero section
  const { title: heroTitle, role: heroRole, action: heroAction } = { title: "AnthonyPumar", role: '"Web Developer" ', action: "solveProblems" };

  //Constant needed to display the proper links on each Content Section
  const aroma360Links = [{link: "https://aroma360.com/", name:"Aroma360"},
  {link: "https://www.hotelcollection.com/", name:"Hotel Collection"},
  {link: "https://www.blassbeauty.com/", name:"Blass Beauty"},
  {link: "https://hotelscents.com/", name:"Hotel Scents"}];
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
      <ContentSection title="Aroma360" date="January 2024 - Present" content={aroma360} image={Aroma360} skills={aroma360Skills} compact={true} links={aroma360Links} />
      <ContentSection title="UHS Hardware" date="May 2022 - January 2024" content={uhsHardware} image={UHSHardware} skills={uhsSkills} compact={true} links={uhsLinks} />
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
