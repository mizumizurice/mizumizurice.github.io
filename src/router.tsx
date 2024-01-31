import MainLayout from "@/components/main/MainLayout";
import Main from "@/pages/Main";
import NotFound from "@/pages/NotFound";
import Profile from "@/pages/Profile";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/profile", element: <Profile /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const router = () => {
  return <RouterProvider router={routes} />;
};

export default router;
