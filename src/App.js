import React from "react";
import styled from "styled-components";

import SelectBox from "./components/SelectBox";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const MainContainer = styled.div`
  max-width: 65%;
  margin: 0 auto;
`;

function App() {
  return (
    <MainContainer>
      <Hero url={API_ENDPOINT} />
      <Stats url={API_ENDPOINT} />
      <SelectBox />
    </MainContainer>
  );
}

export default App;
