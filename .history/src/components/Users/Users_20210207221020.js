import React from 'react'
import "./Users.css"

export default function Users() {
    return (
        <div className="users">

<div  className="tabpanel" role="tabpanel">
    <div className="panel-coloumn mt-3">
  <div className="list-group" id="myList" role="tablist">

    <a className="list-group-item list-group-item-action active" data-bs-toggle="list" href="#home" role="tab">Home</a>

  </div>
  </div>

  <div className="tab-content">
      
    <div className="tab-pane active" id="home" role="tabpanel">
    <h3>Name</h3>
    <h4>email</h4>
    <h4>password</h4>
    <h4>occupation</h4>
    
    <ul class="list-group">
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
    
    </div>

  </div>
</div>
        </div>
    )
}
