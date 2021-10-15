import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  background-color: #343640;
  justify-content: space-evenly;
  padding: 15px;

  h2 {
    cursor: pointer;
    color: #fafafa;
    transition: 0.3s;
  }

  h2:hover {
    color: wheat;
  }
`;

function Header(props) {
  return (
    <HeaderDiv>
      <Link href={"/"}>
        <h2>ALL POSTS</h2>
      </Link>
      <Link href={"/posts/new"}>
        <h2>ADD POST</h2>
      </Link>
    </HeaderDiv>
  );
}

export default Header;
