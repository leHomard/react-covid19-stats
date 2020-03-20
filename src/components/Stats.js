import React from "react";
import styled from "styled-components";

import Card from "./Card";
import { useHttp } from "../hooks/useHttp";
import { formatNumber } from "../utils";

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Stats = ({ url }) => {
  const { data, loading, error } = useHttp(url);

  if (!data || loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  const { confirmed, deaths, recovered } = data;
  const cases = [
    { case: "Confirmed", info: "warning", data: confirmed },
    { case: "Deaths", info: "danger", data: deaths },
    { case: "Recovered", info: "success", data: recovered }
  ];

  return (
    <StatsContainer>
      {cases.map(el => (
        <Card key={el.case} info={el.info}>
          <h2>{formatNumber(el.data.value)}</h2>
          <h4>{el.case}</h4>
        </Card>
      ))}
    </StatsContainer>
  );
};

export default Stats;
