import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CoursesApp from "./CoursesApp.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoursesApp />
  </StrictMode>
);
