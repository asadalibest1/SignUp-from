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


          <a className="list-group-item list-group-item-action active" data-bs-toggle="list" href="#Home" role="tab">Home</a>

    {
      data.map((item, ind)=>{
        <a className="list-group-item list-group-item-action active" data-bs-toggle="list" href={"#"+ind} role="tab">{item.name}</a>

      })
    }

          </div>
        </div>

        <div className="tab-content">



        {
      data.map((item, ind)=>{

        <div className="tab-pane active" id={ind.toString()} role="tabpanel">

      return  <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: </li>
          <li className="list-group-item">Email: </li>
          <li className="list-group-item">Password: </li>
          <li className="list-group-item">Occupation: </li>
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
