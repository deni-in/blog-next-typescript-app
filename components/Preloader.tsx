import React from "react";
import styled from "styled-components";

const PreloaderDiv = styled.div`
  text-align: center;
  font-size: larger;
  margin: 30px;
`;

function Preloader(props) {
  return <PreloaderDiv>LOADING...</PreloaderDiv>;
}

export default Preloader;
