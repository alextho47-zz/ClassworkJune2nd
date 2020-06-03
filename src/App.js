import React from "react";
import "./App.css";
import Contact from "./Contact.js";

function App() {
  return (
    <div className="App">
      <h1>Contact Cards</h1>
      <div className="row">
        <Contact
          name="Bob"
          email="bob@gmail.com"
          phone="9295657888"
        />
        <Contact 
        name="Ruby" 
        email="ruby123@gmail.com" 
        phone="5254789658" />
        <Contact
          name="Mallow"
          email="rainbowclouds@gmail.com"
          phone="5657879547"
        />
        <Contact
          name="Jackie"
          email="123ABC@gmail.com"
          phone="5478965587"
        />
      </div>
    </div>
  );
}

export default App;
