import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/posts/:title",
    element: <BlogPost />,
    errorElement: <ErrorPage />
  },
];

export default routes;
