import { BrowserRouter, Routes, Route, Route } from "react-router";

import Home from "./Home";
import About from "./About";
import CrazyRuote from "./CrazyRoute";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Crazy/route/24335" elememnt={<CrazyRuote />} />
        <Ruote path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
