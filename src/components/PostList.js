import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import { PaginationButtonsList } from "./PaginationButtonsList";
const PostList = () => {
  const [data, setData] = useState(null);
  const [pageId, setPageId] = useState(1);
  const fetchingData = async () => {
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
    fetchingData();
    setData(null);
  }, [pageId]);
  const pageNumberHandler = (pageNumber) => {
    setPageId(pageNumber);
  };

  return (
    <>
      {data !== null ? (
        <Post details={data} />
      ) : (
        <h1 id="loader" className="loader">
          loading
        </h1>
      )}
      <PaginationButtonsList details={data} onClick={pageNumberHandler} />
    </>
  );
};

export { PostList };
