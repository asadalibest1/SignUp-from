import React from 'react'
import "./Users.css"

import { useSelector, useDispatch } from 'react-redux';

import {
  Data,
} from '../../features/counter/counterSlice';

export default function Users() {

  const data = useSelector(Data);

  return (
    <div className="users">

      <div className="tabpanel" role="tabpanel">
        <div className="panel-coloumn mt-3">
          <div className="list-group" id="myList" role="tablist">


          {/* <a className="list-group-item list-group-item-action active" data-bs-toggle="list" href="#Home" role="tab">Home</a> */}

    {
       (!data) ?
       <h3>loading</h3>
       :
      data.map((item, ind)=>{
        return  <div key={ind}>
          <a className="list-group-item list-group-item-action" data-bs-toggle="list" href={"#target"+ind} role="tab">{item.name}</a>
          </div>
      })
    }

          </div>
        </div>

        <div className="tab-content">



        {
          (!data) ?
          <h3>loading</h3>
          :
          data.map((item, ind)=>{
    
          return  <div className="tab-pane" id={"target"+ind} role="tabpanel" key={ind}>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Name: {item.name}</li>
                <li className="list-group-item">Email: {item.email}</li>
                <li className="list-group-item">Password: {item.password}</li>
                <li className="list-group-item">Occupation: {item.occupation}</li>
              </ul>
            </div>
    
    
          })
      }


          {/* <div className="tab-pane active" id="home" role="tabpanel">

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Name: </li>
              <li className="list-group-item">Email: </li>
              <li className="list-group-item">Password: </li>
              <li className="list-group-item">Occupation: </li>
            </ul> */}



        </div>
      </div>
    </div>
  )
}
