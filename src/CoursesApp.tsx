import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

function CoursesApp() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default CoursesApp;
