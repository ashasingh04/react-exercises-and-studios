// import { useState } from 'react'
import "./App.css";
import HobbyIntroduction from "./components/Introduction.jsx";
import MyProjects from "./components/Projects.jsx";

function App() {
  return (
    <>
      <div className="App">
        <h1>My Hobby: Needlepoint</h1>
        <HobbyIntroduction />
        <MyProjects />
      </div>
    </>
  );
}

export default App;
