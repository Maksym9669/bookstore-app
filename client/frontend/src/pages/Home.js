import React, { useState, useEffect } from "react";
import TextContent from "../components/TextContent";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";

import { fetchBooks } from "../redux/apiSlice";

function Home(props) {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.api.books);
  const postStatus = useSelector((state) => state.api.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchBooks());
    }
    console.log("BOOKS: ", books);
  }, [postStatus, dispatch]);

  return (
    <div>
      <Header />
      <TextContent />
    </div>
  );
}

export default Home;
