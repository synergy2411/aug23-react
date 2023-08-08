import { json, useLoaderData } from "react-router-dom";

export default function PostDetailPage() {
  const post = useLoaderData();

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h4>{post.title.toUpperCase()}</h4>
            <blockquote>
              {post.body} <cite className="float-end">- {post.author}</cite>
            </blockquote>

            <div className="row">
              <div className="col-6">
                <div className="d-grid">
                  <button className="btn btn-secondary">Edit</button>
                </div>
              </div>
              <div className="col-6">
                <div className="d-grid">
                  <button className="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ request, params }) {
  const { postId } = params;

  const resp = await fetch(`http://localhost:3030/posts/${postId}`);

  if (!resp.ok) {
    throw json(
      { message: "Unable to find post for " + postId },
      { status: 404 }
    );
  }
  return resp;
}
