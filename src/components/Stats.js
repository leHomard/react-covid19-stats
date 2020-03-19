import React from "react";
import styled from "styled-components";
import { formatNumber } from "../utils";

import CardComponent from "./Card";
import { useDataApi } from "../hooks/useDataApi";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Stats = ({ url }) => {
  const { data, loading, error } = useDataApi(url);
  if (!data || loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <CardContainer>
      <CardComponent info="warning">
        <h2>{formatNumber(data.confirmed.value)}</h2>
        <h4>Confirmed</h4>
      </CardComponent>
      <CardComponent info="danger">
        <h2>{formatNumber(data.deaths.value)}</h2>
        <h4>Deaths</h4>
      </CardComponent>
      <CardComponent info="success">
        <h2>{formatNumber(data.recovered.value)}</h2>
        <h4>Recovered</h4>
      </CardComponent>
    </CardContainer>
  );
};

export default Stats;
