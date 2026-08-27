import ItemCard from "./itemCard";

function MainSection() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}
export default MainSection;
