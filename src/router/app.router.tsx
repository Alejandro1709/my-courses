import { createBrowserRouter } from "react-router";
import AppLayout from "@/layouts/AppLayout";
import IndexPage from "@/pages/IndexPage";
import NotFoundPage from "@/pages/NotFoundPage";
import CreateCoursePage from "@/pages/CreateCoursePage";
import CoursePage from "@/pages/CoursePage";
import EditCoursePage from "@/pages/EditCoursePage";

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
        path: "courses",
        children: [
          {
            path: ":id",
            element: <CoursePage />,
          },
          {
            path: ":id/edit",
            element: <EditCoursePage />,
          },
        ],
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
