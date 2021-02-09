import React from 'react'
import Tabs from '../Tabs/Tabs'

export default function App1() {

    // React.useEffect(()=>{
    //     document.querySelector(".alert").alert();
    // },[])
function change(){
        document.querySelector(".alert").style.display = "none;";
}
    return (
        <div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" onClick={change} data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            
            <Tabs />
        </div>
    )
}
