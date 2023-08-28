import React from 'react'
import "./modal.css";
import Form from './Form';
const Modal = () => {
    return (
        <div className="modal my-modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <center className="modal-body">
                        <Form/>
                    </center>
                    <div className='modal-footer'>
                        <button type="button" className="btn modal-btn" data-bs-dismiss="modal">Kapat</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal