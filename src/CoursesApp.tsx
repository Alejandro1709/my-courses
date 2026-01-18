import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { CoursesProvider } from "./context/CoursesContext";

function CoursesApp() {
  return (
    <>
      <CoursesProvider>
        <RouterProvider router={appRouter} />
      </CoursesProvider>
    </>
  );
}

export default CoursesApp;
