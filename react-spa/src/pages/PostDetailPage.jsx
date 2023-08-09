import {
  Form,
  json,
  redirect,
  useLoaderData,
  useSubmit,
} from "react-router-dom";

export default function PostDetailPage() {
  const post = useLoaderData();

  // const navigate = useNavigate();
  const submit = useSubmit();

  const postDeleteHandler = async () => {
    const proceed = window.confirm(
      "Are you sure to delete this item -" + post.id
    );

    if (proceed) {
      submit(null, { method: "DELETE" });
    }

    // ALTERNATE TO SENDING ACTION TO ROUTER

    // if (proceed) {
    //   const resp = await fetch("http://localhost:3030/posts/" + post.id, {
    //     method: "DELETE",
    //   });
    //   if (!resp.ok) {
    //     throw json(
    //       { message: "Unable to delete item for ID " + post.id },
    //       { status: 401 }
    //     );
    //   }
    //   navigate("/posts");
    // }
  };

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
                <Form>
                  <div className="d-grid">
                    <button
                      className="btn btn-outline-danger"
                      onClick={postDeleteHandler}
                    >
                      Delete
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function action({ request, params }) {
  const { postId } = params;

  const resp = await fetch("http://localhost:3030/posts/" + postId, {
    method: request.method,
  });

  if (!resp.ok) {
    throw json(
      { message: "Unable to Delete item for ID -" + postId },
      { status: 405 }
    );
  }

  return redirect("/posts");
}

export async function loader({ request, params }) {
  const { postId } = params;

  console.log("LOADER : ");

  const resp = await fetch(`http://localhost:3030/posts/${postId}`);

  if (!resp.ok) {
    throw json(
      { message: "Unable to find post for " + postId },
      { status: 404 }
    );
  }
  return resp;
}
