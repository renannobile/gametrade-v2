import Card from "components/Card";
import React from "react";
import styled from "styled-components";

const FilterContainer = styled(Card)`
  width: 300px;
  height: 100%;
  padding: 0.5rem;
`;

const Filters = () => {
  return <FilterContainer>Filters</FilterContainer>;
};

export default Filters;
