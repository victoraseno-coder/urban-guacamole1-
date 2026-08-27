import { useState } from "react";

/*
how to pass state to the other components
update the state if they
props and state 

1.Move the color and set color state inside the ColorForm.<increase perfomance>
  to see the before and after.
  console.log("<component name>",new Date());//for each component
2 .Add a button on a single color to remove the color. <remove color>
   hint:[perfom a state update] 
*/

function ColorsCircles() {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");
  const [radius, setRadius] = useState("");

  const onSubmit = () => {
    const clonedColors = structuredClone(colors);
    clonedColors.push(color);
    setColors(clonedColors);
  };

  return (
    <div>
      <ColorForm color={color} setColor={setColor} onSubmit={onSubmit} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  const { color, setColor, onSubmit } = props;

  return (
    <div>
      <label>enter color</label>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={onSubmit}>save</button>
    </div>
  );
}

function ColorList(props) {
  const { colors, setColors } = props;

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "blue",
            padding: "10px",
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;
