import Navigation from "./Navigation";
import MainSection from "./mainsection";
import SideBar from "./sideBar";

function Amazonpage() {
  return (
    <div>
      <Navigation />
      <div style={{ display: "flex" }}>
        <SideBar />
      </div>
    </div>
  );
}

export default Amazonpage;
