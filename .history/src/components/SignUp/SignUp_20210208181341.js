import React from 'react'
import "./SignUp.css"

import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
  changeName,
  Data,
} from '../../features/counter/counterSlice';


export default function SignUp() {

  const count = useSelector(selectCount);
  const data = useSelector(Data);

const [name, setName] = React.useState("");  
const [email, setEmail] = React.useState("");  
const [password, setPassword] = React.useState("");  
const [occupation, setOccupation] = React.useState("");
const [match, setMatch] = React.useState(null);


function submit(e){
  e.preventDefault();
  
  for (let i=0; i <= data.lenght; i++){

    if(data[i].email === email){
      setMatch(true)
      break;
    }else{
      setMatch(false)
    }
}
}
  // console.log(name,
  //   email,
  //   password,
  //   occupation);

  const dispatch = useDispatch();

    return (
        <div className="SignUp">
          <h2 className="text-center">Sign Up</h2>

<form className="was-validated">

  <div className="mb-3">
    <input type="name" className="form-control" id="validationInput" onChange={(e)=> setName(e.target.value)} placeholder="Name" required />
    <div className="invalid-feedback">
      Please enter your name.
    </div>
  </div>

  <div className="mb-3">
    <input type="email" className="form-control" id="validationInput" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" required />
    <div className="invalid-feedback">
      Please enter your email.
    </div>
  </div>

  <div className="mb-3">
    <input type="password" className="form-control" id="validationInput" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" required />
    <div className="invalid-feedback">
      Please enter your password.
    </div>
  </div>

  <div className="mb-3">
    <input type="occupation" className="form-control" id="validationInput" onChange={(e)=> setOccupation(e.target.value)} placeholder="Occupation" required />
    <div className="invalid-feedback">
      Please enter your occupation.
    </div>
  </div>


  <div className="radioButton form-check mb-3">
    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div className="invalid-feedback">Example invalid feedback text</div>
  </div>


  <div className="mb-3 text-center">
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
