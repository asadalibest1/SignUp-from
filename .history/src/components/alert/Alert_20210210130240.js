import React from 'react'

export default function Alert() {

    function closeAlert() {
        alertea.style.top = "-70px";
      }

    return (
        <div>
            <div class="alertea alert alert-warning alert-dismissible fade show py-1" role="alert">
        <label></label>

        <button type="button" class="close" onClick={closeAlert} data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        </div>
    )
}
