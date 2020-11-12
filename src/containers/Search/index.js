import Flex from "components/Flex";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { doSearch } from "store/search";
import { useParams } from "react-router-dom";


export default () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(doSearch(params.q));
  });

  return (
    <Flex>
      <h2>Search</h2>
    </Flex>
  );
};
