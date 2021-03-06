import React from 'react'
import "./SignUp.css"

import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
  changeName,
  Data,
  setData,
} from '../../features/counter/counterSlice';


export default function SignUp() {

  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const data = useSelector(Data);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [selectOption, setSelectOption] = React.useState(false);

  var match = null;

  React.useEffect(() => {

    const Button = document.querySelector(".submitButton button");

    if (name === "",
      email === "",
      password === "",
      occupation === "",
      selectOption === false) {

      Button.setAttribute("disabled", "disabled");

    } else {
      Button.removeAttribute("disabled");
    }

  }, [name, email, password, occupation, selectOption])

  function submit(e) {
      e.preventDefault();
    // const checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (checkEmail.test(email) === true){
      for (let i = 0; i < data.length; i++) {

        if (data[i].email === email) {
          match = true;
          break;
        } else {
          match = false;
        }
      }  
// }

    if (match === false){
      
      dispatch(setData([...data, {name, email, password, occupation}]))
      
    }if (match === true){
      alert("Email already taken!")
    }
  }

    function Chnage() {
        document.getElementsByClassName("alertea")[0].style.display = "none";
    }

  return (
    <div className="SignUp">


<div class="alertea alert alert-warning alert-dismissible fade show py-2" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" class="close" onClick={Chnage} data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>


      <h2 className="text-center">Sign Up</h2>

      <form className="was-validated">

        <div className="mb-3">
          <input type="name" className="form-control" id="validationInput" onChange={(e) => setName(e.target.value)} placeholder="Name" required />
          <div className="invalid-feedback">
            Please enter your name
    </div>
        </div>

        <div className="mb-3">
          <input type="email" className="form-control" id="validationInput" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <div className="invalid-feedback emailerr">
            Please enter your email
    </div>
        </div>

        <div className="mb-3">
          <input type="password" className="form-control" id="validationInput" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <div className="invalid-feedback">
            Please enter your password
    </div>
        </div>

        <div className="mb-3">
          <input type="text" className="form-control" id="validationInput" onChange={(e) => setOccupation(e.target.value)} placeholder="Occupation" required />
          <div className="invalid-feedback">
            Please enter your occupation
    </div>
        </div>


        <div className="radioButton form-check mb-3">
          <input type="checkbox" className="form-check-input" onClick={() => setSelectOption(!selectOption)} id="validationFormCheck1" required />
          <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
          <div className="invalid-feedback">Example invalid feedback text</div>
        </div>


        <div className="submitButton mb-3 text-center">
          <button className="btn btn-primary px-4" type="submit"
            onClick={submit}
          >Register</button>
        </div>
      </form>

      {/* <p>{count}</p> */}
      {/* <p>{count}</p>
<button onClick={() => dispatch(increment(count+1))} >increment</button>
<button onClick={() => dispatch(decrement(count-1))} >decrement</button>
<p>{Name}</p>
<button onClick={() => dispatch(changeName("sharif"))} >changeName</button> */}

    </div>
  )
}
