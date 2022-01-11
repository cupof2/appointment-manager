import React, {useEffect, useState} from 'react';
import Booking from '../form/Booking';
import './styles.css';

function Home() {

    const [isBooking, setIsBooking] = useState(false);

    useEffect(() => {
        const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
        const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
        const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
        const header = document.querySelector<HTMLElement>('.header.container');

        hamburger!.addEventListener('click', () => {
            hamburger!.classList.toggle('active');
            mobile_menu!.classList.toggle('active');
        });

        document.addEventListener('scroll', () => {
            var scroll_position = window.scrollY;
            if (scroll_position > 250) {
                header!.style.backgroundColor = '#29323c';
            } else {
                header!.style.backgroundColor = 'transparent';
            }
        });

        menu_item.forEach((item) => {
            item.addEventListener('click', () => {
                hamburger!.classList.toggle('active');
                mobile_menu!.classList.toggle('active');
            });
        });
    })

    const closeBooking = () => setIsBooking(false);

    return (
        <div>
            <section id="header">
                <div className="header container">
                    <div className="nav-bar">
                        <div className="brand">
                            <a href="#hero">
                                <h1>✂️ <span>Jho</span>'s <span>S</span>alon</h1>
                            </a>
                        </div>
                        <div className="nav-list">
                            <div className="hamburger">
                                <div className="bar"/>
                            </div>
                            <ul>
                                <li><a href="#hero" data-after="Home">Home</a></li>
                                <li><a href="#services" data-after="Service">Services</a></li>
                                <li><a href="#footer" data-after="Contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="hero">
                <div className="hero container">
                    <div>
                        <h1>Hello! <span></span></h1>
                        <h1>hi <span></span></h1>
                        <h1>...hey <span></span></h1>
                        <a href="#hero"
                           type="button"
                           className="cta"
                           onClick={() => setIsBooking(!isBooking)}>
                            BOOK NOW
                        </a>
                    </div>
                </div>
            </section>

            <section id="services">
                <div className="services container">
                    <div className="service-top">
                        <h1 className="section-title">Services</h1>
                    </div>
                    <div className="service-bottom">
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                            </div>
                            <h2>Haircut - $15</h2>
                            <p>Approximately 30 minutes</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                            </div>
                            <h2>Nails - $20</h2>
                            <p>Approximately 45 minutes</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                            </div>
                            <h2>Hot Oil - $30</h2>
                            <p>Approximately 45 minutes</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                            </div>
                            <h2>Rebond - $$$</h2>
                            <p>The cost and time to finish depend on the length of the client's hair.</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                            </div>
                            <h2>Haircut + Perm - $50</h2>
                            <p>Approximately 1 hour and 30 mins</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                            </div>
                            <h2>Hair spa + haircut - $40</h2>
                            <p>Approximately 1 hour and 30 mins</p>
                        </div>
                        <div className="service-item">
                            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"/>
                            </div>
                            <h2>Foot spa + pedicure - $40</h2>
                            <p>Approximately 1 hour and 30 mins</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className="footer container">
                    <div className="brand">
                        <h1>✂️ <span>Jho</span>'s <span>S</span>alon</h1>
                    </div>
                    <a href={"tel:" + process.env.REACT_APP_PHONE_NUMBER}><h2>Call or
                        text: <u>{process.env.REACT_APP_PHONE_NUMBER}</u></h2></a>
                </div>
            </section>
            <Booking isBooking={isBooking} closeBooking={closeBooking}/>
        </div>
    );
}

export default Home;
