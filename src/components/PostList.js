import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import { PaginationButtonsList } from "./PaginationButtonsList";
const PostList = () => {
  const [data, setData] = useState([]);
  const [pageId, setPageId] = useState(1);
  const [loading, setLoading] = useState(false);
  const fetchingData = async () => {
    // setLoading(false);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageId}&_limit=5`
      );
      const data = await response.json();
      setData(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(false);
    fetchingData();
    console.log(loading);
  }, [pageId]);
  const pageNumberHandler = (pageNumber) => {
    setPageId(pageNumber);
    setLoading(true);
  };
  //   console.log(loading);
  return (
    <>
      {loading ? <Post details={data} /> : <h1 id="loader">loading</h1>}
      <PaginationButtonsList details={data} onClick={pageNumberHandler} />
    </>
  );
};

export { PostList };
