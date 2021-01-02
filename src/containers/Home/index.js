import Flex from "components/Flex";
import React from "react";
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

const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 3rem;
`;

const Search = styled.input`
  width: 100%;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

const Home = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchText = e.target.searchText.value;

    if (searchText) {
      history.push(`/search?q=${searchText}`);
    }
  };

  return (
    <Flex
      fullHeight
      justifyContent="center"
      alignItems="center"
      flexWrap="nowrap">
      <SearchWrapper>
        <Logo>Gametrade</Logo>

        <div style={{ position: "relative" }}>
          <form onSubmit={handleSubmit}>
            <Search
              name="searchText"
              placeholder="Find the game you want"
              autoFocus
            />

            <SearchButton type="submit" className="icon primary">
              <FaSearch />
            </SearchButton>
          </form>
        </div>
      </SearchWrapper>
    </Flex>
  );
};

export default Home;
