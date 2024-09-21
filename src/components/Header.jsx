import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div>
            <div className='blue container-fluid px-5 py-2'>
                <span className='d-flex text-light'>
                    <FaTwitter className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />

                    <FaFacebookF className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />

                    <FaLinkedinIn className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />

                    <FaInstagram className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />

                    <FaYoutube className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />


                    <FaUser className='py-2' style={{ width: "35px", height: "35px" }} />
                    <span className='py-1 pe-2'>Register</span>

                    <FaArrowRightToBracket  className='py-2' style={{ width: "35px", height: "35px" }}/><span className='py-1 pe-2'>Login</span>

                    <FaHome  className='py-2' style={{ width: "35px", height: "35px" }}/>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="My Dashboard"
                        menuVariant="dark"
                        className='py-1'
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                    </NavDropdown></span>
            </div>
        </div>
    )
}

export default Header
