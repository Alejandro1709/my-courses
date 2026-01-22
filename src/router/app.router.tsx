import { createBrowserRouter } from "react-router";
import AppLayout from "@/layouts/AppLayout";
import IndexPage from "@/pages/IndexPage";
import NotFoundPage from "@/pages/NotFoundPage";
import CreateCoursePage from "@/pages/CreateCoursePage";
import CoursePage from "@/pages/CoursePage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "/courses/:id",
        element: <CoursePage />,
      },
      {
        path: "/courses/new",
        element: <CreateCoursePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
