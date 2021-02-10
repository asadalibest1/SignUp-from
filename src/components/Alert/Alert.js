import React from 'react'
import "./Alert.css"

export default function Alert({ msg }) {

  let [trigger, setTrigger] = React.useState(false);

  React.useEffect(() => {

    if (msg.alert !== "") {
      if (trigger === false) {

        document.querySelector(".alertea label").innerHTML = msg.alert;
        document.getElementsByClassName("alertea")[0].style.top = "0px";
        setTrigger(!trigger);

      } else {

        document.getElementsByClassName("alertea")[0].style.top = "-70px";
        setTimeout(() => {
          document.querySelector(".alertea label").innerHTML = msg.alert;
          document.getElementsByClassName("alertea")[0].style.top = "0px";
        }, 310);

      }
    
      if(msg.success === true){
        setTimeout(() => {
          document.getElementsByClassName("alertea")[0].style.top = "-70px";
        }, 1500);      
      }
    }

  }, [msg, trigger])


  function closeAlert() {
    document.getElementsByClassName("alertea")[0].style.top = "-70px";
    setTrigger(!trigger);
  }

  return (
    <div className="alertea-div">
      <div className="alertea alert alert-warning alert-dismissible fade show py-1" role="alert">
        <label></label>

        <button type="button" className="close" onClick={closeAlert} data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}
