import { useNavigate, useLocation } from "react-router";

function Navigation2() {
  const navigate = useNavigate();

  const location = useLocation();

  console.log("current location->", location);

  const isActive = (btnlocation) => {
    //active
    if (location.pathname === btnlocation) {
      return { backgroundColor: "green", color: "white" };
    }
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>Home</button>
      <button onClick={() => navigate("/Crazy/route/24335")}>
        Crazy Route
      </button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Navigation2;
