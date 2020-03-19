import React from "react";
import styled from "styled-components";

import { ReactComponent as DarkIcon } from "../assets/moon-stroke.svg";
import { ReactComponent as LightIcon } from "../assets/sun-stroke.svg";
import { useTheme } from "../contexts/themeProvider";

const ButtonContainer = styled.div`
  position: absolute;
  right: 22em;
  top: 38%;
`;

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 25px;
  box-shadow: 0 1px 4px rgba(0, 50, 50, 0.08);
  svg {
    fill: ${props => props.theme.colors.text};
    height: 3.5rem;
    width: 1.25rem;
  }
`;

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ButtonContainer>
      <StyledButton onClick={toggleTheme}>
        {theme === "light" ? <LightIcon /> : <DarkIcon />}
      </StyledButton>
    </ButtonContainer>
  );
};

export default ToggleButton;
