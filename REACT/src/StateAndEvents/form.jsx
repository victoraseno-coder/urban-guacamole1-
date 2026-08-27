/*
how to handle form inputs and events
*/

import { useState } from "react";

function Form() {
  //event when name changes
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const nameonChange = (e) => {
    //console.log("name is ",e,value);
    SetName(e.target.value);
  };

  //
  const onsubmit = () => {
    console.log("submit button clicked");
    console.log("name is", name);
    console.log("email is", email);
    console.log("password is", password);
  };

  return (
    <div>
      <div>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input onChange={nameonChange} />
        </div>
      </div>
      <div>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input onChange={(e) => SetEmail(e.target.value)} />
        </div>
      </div>
      <div>
        <div>
          <label>password</label>
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={onsubmit}>submit</button>
      </div>

      <ul>
        <li>Name:{name}</li>
        <li>Email:{email}</li>
        <li>Password:{password}</li>
      </ul>
    </div>
  );
}

export default Form;
