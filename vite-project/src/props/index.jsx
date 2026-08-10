function Parent() {
  const str = "helo world";
  const amount = 2000;
  const isok = true;
  const notset = null;
  //object;.< >
  const car = {
    model: "mercedes benz",
    manufacturer: "mercedes",
    engine: {
      cc: 2500,
    },
  };

  const colors = ["blue", "green", "yellow"];

  return (
    <div>
      <h1>Iam the parent component</h1>
      <Child1 str={str} amountinnumber={amount} isok={isok} notset={notset} />
      <Child2
        str={str}
        amountinnumber={amount}
        isok={isok}
        notset={notset}
        car={car}
      />
      <Child3 str={str} amountinnumber={amount} isok={isok} notset={notset} />
    </div>
  );
}

function Child1(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the Child component</h1>
      <ul>
        <li>
          favorite string <b>{props.str}</b>
        </li>
        <li>
          amount<b>{props.amountinnumber}</b>
        </li>
        <li>
          isok<b>{props.isok}</b>
        </li>
        <li>
          isok<b>{String(props.isok)}</b>
        </li>
        <li>
          not set<b>{props.notset}</b>
        </li>
      </ul>
    </div>
  );
}

function Child2(props) {
  const { str, amountinnumber, isok, notset, car } = props;
  /*
  key; value
  const str-props.str 
  const amountInNumber-props.amaountInNumber 
  const amount-props.amaountinnumber 
  */
  console.log(props);
  return (
    <div>
      <h1>I am the Child 2 component</h1>
      <ul>
        <li>
          favorite string <b>{str}</b>
        </li>
        <li>
          amount<b>{amountinnumber}</b>
        </li>
        <li>
          isok<b>{isok}</b>
        </li>
        <li>
          isok<b>{String(isok)}</b>
        </li>
        <li>
          not set<b>{notset}</b>
        </li>
        <li>
          car model <b>{car.model}</b>
        </li>

        <li>
          car manufacturer<b>{car["manufacturer"]}</b>
        </li>
        <li>
          color <b>{"blue"}</b>
        </li>
      </ul>
    </div>
  );
}

function Child3({ str, amountinnumber, isok, notset }) {
  /*
  const{str,amountinnumber,isok,notset} - props
  */
  return (
    <div>
      <h1>I am the Child 3 component</h1>
      <ul>
        <li>
          favorite string <b>{str}</b>
        </li>
        <li>
          amount<b>{amountinnumber}</b>
        </li>
        <li>
          isok<b>{isok}</b>
        </li>
        <li>
          isok<b>{String(isok)}</b>
        </li>
        <li>
          not set<b>{notset}</b>
        </li>
      </ul>
    </div>
  );
}
export default Parent;
