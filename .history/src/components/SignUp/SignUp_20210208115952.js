import React from 'react'
import "./SignUp.css"

import { useSelector, useDispatch } from 'react-redux';
import {
  // decrement,
  increment,
  // incrementByAmount,
  // incrementAsync,
  selectCount,
} from '../../features/counter/counterSlice';


export default function SignUp() {


  const count = useSelector(selectCount);
  const dispatch = useDispatch();

    return (
        <div className="SignUp">
          <h2 className="text-center">Sign Up</h2>

<form className="was-validated">

  <div className="mb-3">
    <input type="name" className="form-control" id="validationTextarea" placeholder="Name" required />
    <div className="invalid-feedback">
      Please enter your name.
    </div>
  </div>

  <div className="mb-3">
    <input type="email" className="form-control" id="validationTextarea" placeholder="Email" required />
    <div className="invalid-feedback">
      Please enter your email.
    </div>
  </div>

  <div className="mb-3">
    <input type="password" className="form-control" id="validationTextarea" placeholder="Password" required />
    <div className="invalid-feedback">
      Please enter your password.
    </div>
  </div>

  <div className="mb-3">
    <input type="occupation" className="form-control" id="validationTextarea" placeholder="Occupation" required />
    <div className="invalid-feedback">
      Please enter your occupation.
    </div>
  </div>

{/* 
  <div className="radioButton form-check mb-3">
    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div className="invalid-feedback">Example invalid feedback text</div>
  </div>


  <div className="mb-3 text-center">
    <button className="btn btn-primary px-4" type="submit"  
        onClick={() => dispatch(increment())}
    >Register</button>
  </div> */}
</form>
<p>{count}</p>
<button onClick={() => dispatch(increment())} >increment</button>
        </div>
    )
}
