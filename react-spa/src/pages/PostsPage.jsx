import React from "react";
import { useLoaderData, json, useNavigate, Link } from "react-router-dom";
import "./PostsPage.css";

export default function PostsPage() {
  const posts = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid text-center">
            <Link to="new">Add Post</Link>
          </div>
        </div>
      </div>
      <div className="row">
        {posts.map((post) => (
          <div className="col-4" key={post.id}>
            <div
              className="card my-card"
              onClick={() => navigate("/posts/" + post.id)}
            >
              <div className="card-header">
                <h5 className="text-center">{post.title.toUpperCase()}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function loader() {
  const resp = await fetch("http://localhost:3030/posts");

  if (!resp.ok) {
    throw json({ message: "Could not fetch all posts" }, { status: 401 });
  }
  return resp;
}
