const fetchPosts = async (pageId, limit) => {
  let url = `https://jsonplaceholder.typicode.com/posts?_page=${pageId}&_limit=${limit}`;
  return fetch(url);
};

export { fetchPosts };
