import React from 'react'
import "./SignUp.css"

export default function SignUp() {
    return (
        <div>

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


  <div className="form-check mb-3">
    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
    <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div className="invalid-feedback">Example invalid feedback text</div>
  </div>


  <div className="mb-3">
    <button className="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
</form>
        </div>
    )
}
