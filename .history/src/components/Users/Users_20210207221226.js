import React from 'react'
import "./Users.css"

export default function Users() {
  return (
    <div className="users">

      <div className="tabpanel" role="tabpanel">
        <div className="panel-coloumn mt-3">
          <div className="list-group" id="myList" role="tablist">

            <a className="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">Home</a>

          </div>
        </div>

        <div className="tab-content">

          <div className="tab-pane active" id="home" role="tabpanel">

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name: </li>
              <li className="list-group-item">Email: </li>
              <li className="list-group-item">Password: </li>
              <li className="list-group-item">Occupation: </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  )
}
