import React from "react";
import styled from "styled-components";

import SelectBox from "./components/SelectBox";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

function App() {
  return (
    <div className="container">
      <Hero url={API_ENDPOINT} />
      <Stats url={API_ENDPOINT} />
      <SelectBox />
    </div>
  );
}

export default App;
