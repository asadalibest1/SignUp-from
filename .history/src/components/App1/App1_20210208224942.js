import React from 'react'
import Tabs from '../Tabs/Tabs'

export default function App1() {

    // React.useEffect(()=>{
    //     document.querySelector(".alert").alert();
    // },[])
function Chnage(){
        document.getElementsByClassName("alertea")[0].style.display = "none;";
}
    return (
        <div className="alertea">
            <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="close" onClick={Chnage} data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </div>
            
            <Tabs />
        </div>
    )
}
