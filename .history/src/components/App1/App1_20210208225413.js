import React from 'react'
import Tabs from '../Tabs/Tabs'

export default function App1() {

    // React.useEffect(()=>{
    //     document.querySelector(".alert").alert();
    // },[])
    function Chnage() {
        document.getElementsByClassName("alert")[0].style.display = "none;";
    }
    return (
        <div>
            <div onClick={Chnage} class="alert alert-warning" role="alert">
                This is a warning alert—check it out!
            </div>

            <Tabs />
        </div>
    )
}
