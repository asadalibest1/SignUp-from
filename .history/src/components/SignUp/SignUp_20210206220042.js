import React from 'react'
import "./SignUp.css"

export default function SignUp() {
    return (
        <div>

<form className="was-validated">

  <div className="mb-3">
    <input type="name" className="form-control" id="validationTextarea" placeholder="Required  example textarea" required />
    <div className="invalid-feedback">
      Please enter a message in the textarea.
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
