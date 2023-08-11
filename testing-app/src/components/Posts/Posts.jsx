import React from "react";
import useFetch from "../../hooks/useFetch";

export default function Posts() {
  const { data, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
  });

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>The Post Component</h1>
      <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </>
  );
}
