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
                  <a className="list-group-item" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="#collapse1">
                <span>1) </span>
                  item1
                  </a>
                  <a className="list-group-item" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="#collapse2">
                <span>2) </span>
                  item2
                  </a>
      </p>

           
          <div className="collapse" id="collapse0">
                <div className="card card-body">

                  <h3>Name: </h3>
                  <h3>Email: </h3>
                  <h3>Password: </h3>
                  <h3>Occupation: </h3>
                </div>
              </div>
              <div className="collapse" id="collapse1">
                <div className="card card-body">

                  <h3>Name: </h3>
                  <h3>Email: </h3>
                  <h3>Password: </h3>
                  <h3>Occupation: </h3>
                </div>
              </div>
              <div className="collapse" id="collapse2">
                <div className="card card-body">

                  <h3>Name: </h3>
                  <h3>Email: </h3>
                  <h3>Password: </h3>
                  <h3>Occupation: </h3>
                </div>
              </div>




    </div>
  )
}
