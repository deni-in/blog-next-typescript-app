import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/action-creators/post";
import Header from "../../components/Header";
import { AppWrapper } from "../index";
import AddForm from "../../components/AddForm";

function New() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };

  const handleAddPost = () => {
    dispatch(addPost(title, body));
  };
  return (
    <AppWrapper>
      <Header />
      <AddForm
        title={title}
        body={body}
        handleChangeTitle={handleChangeTitle}
        handleChangeBody={handleChangeBody}
        handleAddPost={handleAddPost}
      />
    </AppWrapper>
  );
}

export default New;
