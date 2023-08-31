import React from 'react'
import Button from '../../components/Button';
import {motion} from "framer-motion";
import "./header.css";
const Header = () => {
    const variants = {
        hidden: {opacity: 0 },
        show:{
            opacity:1,
            transition:{
                duration:2,
                staggerChildren:0.2,
            }
        }
    };
    const item = {
        hidden:{
            opacity:0,
            y:-100,
        
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.8,
            }
        }
    };
    return (
        <motion.nav className="navbar navbar-expand-md navbar-light "
        variants={variants}
        initial="hidden"
        animate="show"
        >
            <div className="container custom-width d-flex justify-content-between">
                <motion.a className="navbar-brand"  variants={item} href="#"><span className='colored'>Y</span>arınlar <span  className='colored'>S</span>igorta</motion.a>
                <button className="navbar-toggler custom-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse desktop-flex" id="navbarNav">
                    <ul className="navbar-nav">
                        <motion.li variants={item} className="nav-item">
                            <a className="nav-link" aria-current="page" href="#hakkımızda">Hakkımızda</a>
                        </motion.li>
                        <motion.li variants={item} className="nav-item">
                            <a className="nav-link" href="#hizmetlerimiz">Hizmetlerimiz</a>
                        </motion.li>
                        <motion.li variants={item} className="nav-item">
                            <a className="nav-link" href="#iletisim">İletişim</a>
                        </motion.li>
                    </ul>
                    
                </div>
                <Button variants={item} text="TEKLİF AL" hide={true}/>
            </div>
        </motion.nav>
    )
}

export default Header