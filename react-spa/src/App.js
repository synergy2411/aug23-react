import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage, { loader as PostLoader } from "./pages/PostsPage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import PostDetailPage, {
  loader as PostDetailLoader,
  action as PostDetailAction,
} from "./pages/PostDetailPage";

const router = createBrowserRouter([
  {
    path: "/", // http://localhost:3000
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts", // http://localhost:3000/posts
        element: <PostsPage />,
        loader: PostLoader,
      },
      {
        path: "posts/:postId",
        element: <PostDetailPage />,
        loader: PostDetailLoader,
        action: PostDetailAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
