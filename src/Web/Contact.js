import React from 'react'
import { Component } from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import NewLetter from '../Component/NewLetter';

class Contact extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <section id="page-header" className="about-header">
                    <h2>#let's_talk</h2>
                    <p>LEAVE A MESSAGE, We love to hear from you!</p>
                </section>
                <section id="contact-details" className="section-p1">
                    <div className="details">
                        <span>GET IN TOUCH</span>
                        <h2>Visit one of our agency locations or contact us today</h2>
                        <h3>Head Office</h3>
                        <div>
                            <li>
                                <i className=" fal fa-map" />
                                <p>25 Vu Ngoc Phan</p>
                            </li>
                            <li>
                                <i className=" fal fa-envelope" />
                                <p>anhtuan081220@gmail.com</p>
                            </li>
                            <li>
                                <i className=" fal fa-phone-alt" />
                                <p>anhtuan081220@gmail.com</p>
                            </li>
                            <li>
                                <i className=" fal fa-clock" />
                                <p>Monday to Saturday:8.00 am to 17.00 pm </p>
                            </li>
                        </div>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.988390094964!2d105.81945408421932!3d21.022738704090685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1655830023200!5m2!1svi!2s"
                            width={600}
                            height={450}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>
                <section id="form-details">
                    <form action="">
                        <span>LEAVE A MESSAGE</span>
                        <h2>We love to hear from you</h2>
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="E-mail" />
                        <input type="text" placeholder="Subject" />
                        <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            placeholder="You Message"
                            defaultValue={""}
                        />
                        <button className="normal">Submit</button>
                    </form>
                    <div className="people">
                        <div>
                            <img src="img/people/1.png" alt="" />
                            <p>
                                <span>John Doe</span> Senior Marketing Manager <br /> Phone:0123456789
                                <br />
                                Email:anhtuan081220@gmail.com
                            </p>
                        </div>
                        <div>
                            <img src="img/people/2.png" alt="" />
                            <p>
                                <span>William Smith</span> Senior Marketing Manager <br />{" "}
                                Phone:0123456789
                                <br />
                                Email:anhtuan081220@gmail.com
                            </p>
                        </div>
                        <div>
                            <img src="img/people/3.png" alt="" />
                            <p>
                                <span>Emma Stone</span> Senior Marketing Manager <br />{" "}
                                Phone:0123456789
                                <br />
                                Email:anhtuan081220@gmail.com
                            </p>
                        </div>
                    </div>
                </section>
                <NewLetter></NewLetter>
                <Footer></Footer>
            </>

        )
    }

}

export default Contact