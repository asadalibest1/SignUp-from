import React from 'react'
import SignUp from "../SignUp/SignUp"
import Users from "../Users/Users"
import MobileUsers from "./MobileUsers/MobileUsers"
import "./Tabs.css"

export default function Tabs() {
    return (
        <div className="tabs-main">
            <div className="tabs">

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item text-center w-50" role="presentation">
                        <a className="nav-link active" id="signUp-tab" data-bs-toggle="tab" href="#signUp" role="tab" aria-controls="signUp" aria-selected="true">SignUp</a>
                    </li>
                    <li className="nav-item text-center w-50" role="presentation">
                        <a className="nav-link" id="users-tab" data-bs-toggle="tab" href="#users" role="tab" aria-controls="users" aria-selected="false">Users</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="signUp" role="tabpanel" aria-labelledby="signUp-tab">
                        <SignUp />
                    </div>
                    <div className="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">

                        <Users />
                        <MobileUsers />
                    </div>
                </div>


            </div>
        </div>
    )
}
