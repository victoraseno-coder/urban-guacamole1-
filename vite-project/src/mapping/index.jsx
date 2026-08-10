function Mapping() {
  /*
    in react you might need to display data from an array
    :for <array.map>:new array
    react {expression}
    @param1=>call back function=>single array item will be passed,index @param1(param2,param3)
    @param2->single array item will be passsed
    */
  const numbers = [2, 6, 23, 565, 32];

  numbers.forEach((element) => {
    console.log("Element is", element);
  });

  const powerofnumbers = numbers.map((n) => {
    console.log("this is n", n);
    return n * n;
  });

  const justMap = numbers.map((n) => "cats and dogs");
  console.log(powerofnumbers);
  console.log(justMap);

  const colors = ["green", "yellow", "blue", "black"];

  return (
    <div>
      <h1>Mapping colors</h1>

      <h4>using arrow function</h4>
      {colors.map((color, index) => {
        return (
          <div key={index}>
            for index <b>{index}</b> color is <b>{color}</b>
          </div>
        );
      })}

      <h4>using direct arrow functions</h4>
      {colors.map(function (c, i) {
        return (
          <div key={i}>
            for index <b>{i}</b> color is <b>{c}</b>
          </div>
        );
      })}

      <h4>using anonymous function</h4>
      {colors.map(function (c, i) {
        return (
          <div key={i}>
            for index <b>{i}</b> color is <b>{c}</b>
          </div>
        );
      })}

      <h4>using referencing the function</h4>
      {colors.map(function (c, i) {
        return <SingleColorComponent c={c} i={i} key={i} />;
      })}
    </div>
  );
}

function SingleColorComponent(props) {
  const { c, i } = props;
  return (
    <div>
      for index <b>{i}</b> color is <b>{c}</b>
    </div>
  );
}

export default Mapping;
