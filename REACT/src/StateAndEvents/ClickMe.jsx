/*
state->
when a state changes, everywhere that state is being used it
changes automaticaly 
*/

import { useState } from "react";

function Clickme() {
  /*
    const{name,set<name>}=useState({initial value})
    const[@parama1,@param2]=useState(@initialstate<starting state>)
    @param1->the current state:<intiger,array>
    @param2->function to update the state
    @param2(newState)
    */
  const [n, setN] = useState(0);

  const increment = () => {
    const newN = n + 1;
    setN(newN); //setN(n+1)
  };

  const decrement = () => {
    setN(n - 1);
  };

  const spoil = () => {
    setN("cats and pumba");
  };

  const reset = () => {
    setN(0);
  };
  return (
    <div>
      <h4>Clicked{n}</h4>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={spoil}>spoil</button>
        <button onClick={reset}>reset</button>
      </div>
      <h4>clicked{n}</h4>
    </div>
  );
}
export default Clickme;
