import React, { useState } from "react";
import { Select } from "antd";
import styled from "styled-components";

import { useHttp } from "../hooks/useHttp";
import Stats from "./Stats";

const { Option } = Select;
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const StyledSelect = styled(Select)`
  width: 150px;
  display: inherit;
  left: 43%;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const SelectBox = () => {
  const [country, setCountry] = useState("FR");
  const { data, loading, error } = useHttp(API_ENDPOINT + "/countries");

  if (!data || loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  return (
    <div>
      <StyledSelect
        showSearch
        placeholder="Select a country"
        onChange={e => setCountry(e)}
      >
        {Object.entries(data.countries).map(([country, code]) => (
          <Option key={code} value={code}>
            {country}
          </Option>
        ))}
      </StyledSelect>
      <Stats url={`${API_ENDPOINT}/countries/${country}`} />
    </div>
  );
};

export default SelectBox;
