function ItemCard() {
  const description =
    "a tool and an activity where a person swings a long cord over their head and under their feet, leaping over it each time.";
  const amount = "kes 2000";
  //react application:primitive datatypes<string,boolean,numbers>

  return;
  <div
    style={{
      display: "flex",
      FlexDirection: "column",
      width: "300px",
      boder: "2px solid rgba(0,0,0,0.2,)",
      padding: "2px 4px 2px 4px",
    }}
  >
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img
        width={"200px"}
        src="https://contents.mediadecathlon.com/p1899141/682c88daaeb6785c264ccc027406ea84/p1899141.jpg"
      />
    </div>
    <div style={{ textAlign: "left", fontSize: "10px" }}>{{ description }}</div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          boder: "2px solid rgba(0,0,0,0.2)",
          padding: "2px 4px 2px 4px",
          color: "white",
          backgroundColor: "orange",
        }}
      >
        Add to cart
      </button>
    </div>
  </div>;
}

export default ItemCard;
