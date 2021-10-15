import React from "react";
import styled from "styled-components";
import Link from "next/link";

const List = styled.div`
  width: 70%;
  margin: auto;
  display: block;
  justify-content: center;
  text-align: center;
  font-size: xx-large;
  cursor: default;
  h3 {
    cursor: pointer;
    transition: 0.3s;
  }
  h3:hover {
    color: wheat;
  }
`;

function PostsList({ posts }) {
  return (
    <List>
      <h1>Posts:</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </div>
        );
      })}
    </List>
  );
}

export default PostsList;
