import React, {useState} from "react";
import "./styles.scss";

const Navbar = () => {

    const toggleHamburger = () => {
        const navToggle = document.getElementsByClassName("nav-toggle")[0];
        const dropdown = document.getElementsByClassName("dropdown")[0];
        navToggle.classList.toggle("active");
        dropdown.classList.toggle("active");
    }

    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="brand">
                    <a href="/">✂️ Joe's Parlor</a>
                </div>
                <nav>

                    <div className="nav-mobile">
                        <a className="nav-toggle" href="#!" onClick={toggleHamburger}>
                            <span></span>
                        </a>
                    </div>
                    <div className="dropdown">
                        <ul className="nav-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;
