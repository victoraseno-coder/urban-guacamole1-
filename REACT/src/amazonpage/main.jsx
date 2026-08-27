import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Amazonpage from "./Amazonpage";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Amazonpage />
  </StrictMode>,
);
