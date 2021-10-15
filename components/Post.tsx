import React from "react";
import styled from "styled-components";

const PostDiv = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
`;

function Post({ title, body, id }) {
  return (
    <PostDiv>
      <div>
        <h1>{title}</h1>
        <p>id: {id}</p>
      </div>
      <div>
        <h2>{body}</h2>
      </div>
    </PostDiv>
  );
}

export default Post;
