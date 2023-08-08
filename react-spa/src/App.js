import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/", // http://localhost:3000
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsPage />,
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
