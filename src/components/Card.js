import React from "react";
import styled from "styled-components";

import { mediaQuery } from "../themes";

const StyledCard = styled.div`
  margin: 10px 0;
  min-height: 150px;
  min-width: 250px;
  width: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  ${mediaQuery.tablet} {
    width: 80%;
    margin: 10px;
  }
  &.pad20 {
    padding: 20px;
  }
  h2 {
    font-size: 2em;
    text-align: center;
    color: ${props => {
      switch (props.info) {
        case "warning":
          return props.theme.colors.warning;
        case "success":
          return props.theme.colors.success;
        case "danger":
          return props.theme.colors.danger;
        default:
          return "";
      }
    }};
  }
  h4 {
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const CardComponent = ({ children, info }) => {
  return (
    <StyledCard className="pad20" info={info}>
      {children}
    </StyledCard>
  );
};

export default CardComponent;
