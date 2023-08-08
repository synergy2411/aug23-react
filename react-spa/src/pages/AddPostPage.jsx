import { Form, json, redirect } from "react-router-dom";

export default function AddPostPage() {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Add New Post</h2>
            <Form method="POST">
              {/* title */}
              <div className="form-group mb-3">
                <label htmlFor="title">Title :</label>
                <input type="text" name="title" className="form-control" />
              </div>
              {/* body */}
              <div className="form-group mb-3">
                <label htmlFor="body">Body :</label>
                <textarea
                  name="body"
                  className="form-control"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              {/* author */}
              <div className="form-group mb-3">
                <label htmlFor="author">Author :</label>
                <input type="text" name="author" className="form-control" />
              </div>
              {/* button */}
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function action({ request, params }) {
  const formData = await request.formData();

  let newPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    author: formData.get("author"),
  };

  const resp = await fetch("http://localhost:3030/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!resp.ok) {
    throw json({ message: "Unable to create the post" }, { status: "501" });
  }

  return redirect("/posts");
}
