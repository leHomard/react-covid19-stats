import React from "react";
import styled from "styled-components";

import logo from "../assets/coronaMap.png";
import { useHttp } from "../hooks/useHttp";
import ToggleButton from "./ToggleButton";

const StyledSection = styled.section`
  margin-top: 2em;
`;

const StyledLogo = styled.div`
  background: url(${logo});
  height: 300px;
  border-radius: 2rem;
  background-size: contain;
  margin-bottom: 2em;
`;

const StyledInfo = styled.div`
  display: contents;
  text-align: center;
  color: #5b882c;
  h1 {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const Hero = ({ url }) => {
  const { data, loading, error } = useHttp(url);
  if (!data || loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  return (
    <StyledSection>
      <StyledLogo />
      <ToggleButton />
      <StyledInfo>
        <h1>Global Case</h1>
        <p>{"last update : " + data.lastUpdate}</p>
      </StyledInfo>
    </StyledSection>
  );
};

export default Hero;
