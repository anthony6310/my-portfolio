import React from "react";
import Header from "./components/Header/Header";

function App() {
  const {title: heroTitle, role: heroRole, action: heroAction} = {title: "AnthonyPumar", role: "Web Developer", action: "problemsSolved"};

  return (
    <div>
      <Header title={heroTitle} role={heroRole} action={heroAction}/>
      <Header title="Title" />
    </div>
  );
}

export default App;
