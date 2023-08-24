import React from 'react'
import Button from '../../components/Button';
import "./header.css";
const Header = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-light ">
            <div class="container custom-width d-flex justify-content-between">
                <a class="navbar-brand" href="#"><span className='colored'>Y</span>arınlar <span  className='colored'>S</span>igorta</a>
                <button class="navbar-toggler custom-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse desktop-flex" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Hakkımızda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hizmetlerimiz</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">İletişim</a>
                        </li>
                    </ul>
                    
                </div>
                <Button text="TEKLİF AL" hide={true}/>
            </div>
        </nav>
    )
}

export default Header