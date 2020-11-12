import Flex from "components/Flex";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
  color: var(--primary-color);
  text-shadow: 4px 4px #000;
  font-size: 3rem;
  text-align: center;
  margin-top: 0;
`;

const Search = styled.input`
  width: 400px;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

export default () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    history.push(`/search?q=${searchText}`);
  };

  return (
    <Flex
      style={{ minHeight: "100vh" }}
      justifyContent="center"
      alignItems="center"
      flexWrap="nowrap">
      <div>
        <Logo>Gametrade</Logo>

        <div className="relative">
          <form onSubmit={handleSubmit}>
            <Search
              value={searchText}
              onChange={({ target: { value } }) => setSearchText(value)}
              placeholder="Find the game you love"
              autoFocus
            />
            <SearchButton type="submit" className="icon primary">
              <FaSearch />
            </SearchButton>
          </form>
        </div>
      </div>
    </Flex>
  );
};
