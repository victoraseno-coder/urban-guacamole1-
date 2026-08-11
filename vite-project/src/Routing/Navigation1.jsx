import { NavLink } from "react-router";

function Navigation() {
  return (
    <div style={{ display: "flex", justifyContent: "space evenly" }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? "red" : "black")}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? "red" : "black")}
      >
        about
      </NavLink>
      <NavLink
        to="/Crazy/route/24335"
        style={({ isActive }) => (isActive ? "red" : "black")}
      >
        crazy route
      </NavLink>
    </div>
  );
}

export default Navigation1;
