import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Form = styled.div`
  width: 80%;
  margin: auto;

  input {
    width: 100%;
    font-size: larger;
    flex-wrap: wrap;
  }

  button {
    width: 30%;
    border: none;
    background-color: #343640;
    color: #fafafa;
    font-size: larger;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;
  }
  button:hover {
    color: wheat;
  }
`;

function AddForm({
  title,
  body,
  handleChangeTitle,
  handleChangeBody,
  handleAddPost,
}) {
  return (
    <Form>
      <h1>Add your post</h1>
      <div>
        <input
          type={"text"}
          onChange={handleChangeTitle}
          value={title}
          placeholder={"title"}
        />
      </div>
      <div>
        <textarea
          onChange={handleChangeBody}
          value={body}
          placeholder={"body"}
        />
      </div>
      <Link href={"/"}>
        <button onClick={handleAddPost}>add</button>
      </Link>
    </Form>
  );
}

export default AddForm;
