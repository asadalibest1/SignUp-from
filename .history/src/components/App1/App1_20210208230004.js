import React from 'react'
import Tabs from '../Tabs/Tabs'

export default function App1() {

    // React.useEffect(()=>{
    //     document.querySelector(".alert").alert();
    // },[])
    function Chnage() {
        document.getElementsByClassName("alertea")[0].style.display = "none";
    }
    return (
        <div>
            <div className="alertea alert alert-warning" role="alert">
                This is a warning alert—check it out!
            </div>
                <p className="alertea">asdasdasdasda</p>
                <button onClick={Chnage}>button</button>
            <Tabs />
        </div>
    )
}
