import FilterList from "./FilterList";

function SideBar() {
  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        flexDirection: "column",
      }}
    >
      <FilterList title={"conditions"} options={["new", "used", "renewed"]} />

      <FilterList
        title={"material"}
        options={["plastic", "rubber", "pvc", "allot steel", "alluminium"]}
      />

      <FilterList
        title={"uses"}
        options={[
          "exercise",
          "speed and endurance",
          "boxing",
          "body building",
          "martial arts",
        ]}
      />

      <FilterList
        title={"brand"}
        options={["cross rope", "venum", "sport bit", "canon sport", "adidas"]}
      />
    </div>
  );
}

export default SideBar;
