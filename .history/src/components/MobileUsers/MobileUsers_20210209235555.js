import React from 'react'
import "./MobileUsers.css"
import { useSelector } from 'react-redux';
import { Data } from '../../features/counter/counterSlice';

export default function MobileUsers() {

  const data = useSelector(Data);


  return (
    <div className="mobile-users-div">
      <p>
          <a className="list-group-item" data-bs-toggle="collapse" href="#collapse0" role="button" aria-expanded="false" aria-controls="#collapse0">
                <span>0) </span>
                  item0
                  </a>

                  <div className="collapse" id="collapse0">
                <div className="card card-body">

                  <h3>Name: </h3>
                  <h3>Email: </h3>
                  <h3>Password: </h3>
                  <h3>Occupation: </h3>
                </div>
              </div>
              
              </p>


    </div>
  )
}
