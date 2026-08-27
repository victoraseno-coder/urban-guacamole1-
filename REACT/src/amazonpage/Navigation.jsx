/*

top navigation of the page 

*/
/*
import name from the realtive path
ensure before import its in the src directory
*/

import logo from "./assets/logo.png";
/*
component naming rules
null or valid jsx
*/

function Navigation() {
  return (
    <div className="nav">
      <img src={logo} width="60px" />
      <input placeholder="search" />
    </div>
  );
}
/*

export so that any other file can import the component
1.Defaault Export :<one major>
*/

export default Navigation;
