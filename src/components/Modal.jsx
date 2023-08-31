import React from 'react'
import "./modal.css";
import Form from './Form';

const Modal = () => {
    function handleCloseModal(){            
        document.getElementById("staticBackdrop").classList.remove("show");
        document.getElementById("staticBackdrop").style='display:none;';
        document.querySelectorAll(".modal-backdrop")
                .forEach(el => el.classList.remove("modal-backdrop"));
                document.body.classList.remove("modal-open");
                document.body.style="overflow:visible;";
    }
    return (
        <div className="modal my-modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <center className="modal-body">
                        <Form/>
                    </center>
                    <div className='modal-footer'>
                        <button type="button" className="btn modal-btn" data-bs-dismiss="modal">Kapat</button>
                        {/* <button onClick={handleCloseModal}>Handle</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal