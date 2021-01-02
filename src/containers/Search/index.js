import Container from "components/Container";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { doSearch, resultsSelector } from "store/search";
import Results from "./Results";

const Search = () => {
  const dispatch = useDispatch();
  const results = useSelector(resultsSelector);
  const params = new URLSearchParams(useLocation().search);
  const q = params.get("q");

  useEffect(() => {
    dispatch(doSearch(q));
  }, [dispatch, q]);

  return (
    <Container>
      <Results results={results} />
    </Container>
  );
};

export default Search;
