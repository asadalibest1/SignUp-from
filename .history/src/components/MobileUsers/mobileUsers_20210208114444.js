import React from 'react'
import "./MobileUsers.css"

export default function MobileUsers() {
  return (
    <div className="mobile-users-div">
      <p>
        <a className="list-group-item" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
          <span>1) </span>
            Name
            </a>
      </p>
      <div className="collapse" id="collapseExample1">
        <div className="card card-body">

      <h3>Name: </h3>
      <h3>Email: </h3>
      <h3>Password: </h3>
      <h3>Occupation: </h3>
  </div>
      </div>


      <p>
        <a className="list-group-item" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
          Name
  </a>
      </p>
      <div className="collapse" id="collapseExample2">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
      </div>

      <p>
        <a className="list-group-item" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Name
  </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
      </div>

    </div>
  )
}
