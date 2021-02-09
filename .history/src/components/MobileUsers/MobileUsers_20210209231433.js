import React from 'react'
import "./MobileUsers.css"
import { useSelector } from 'react-redux';
import { Data } from '../../features/counter/counterSlice';

export default function MobileUsers() {

  const data = useSelector(Data);


  return (
    <div className="mobile-users-div">
      <p>
        
       {
         data.map((item, ind)=>{
           
          return <a className="list-group-item" data-bs-toggle="collapse" href={"#collapse"+ind} role="button" aria-expanded="false" aria-controls={"#collapse"+ind}>
                <span>{ind}) </span>
                  {item.name}
                  </a>
         })
       } 
       
      </p>

      {
         data.map((item, ind)=>{
           
          return <div className="collapse" id={"collapse"+ind}>
                <div className="card card-body">

                  <h3>Name: {item.name}</h3>
                  <h3>Email: {item.email}</h3>
                  <h3>Password: {item.password}</h3>
                  <h3>Occupation: {item.occupation}</h3>
                </div>
              </div>
        
        })
       }





    </div>
  )
}
