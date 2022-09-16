import React from 'react'
import { Component } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import NewLetter from '../Component/NewLetter'


class About extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <section id="page-header" className="about-header">
                    <h2>#KnowUs</h2>
                    <p>RLorem ipsum dolor sit amet, consectetur</p>
                </section>
                <section id="about-head" className="section-p1">
                    <img src="img/about/a6.jpg" alt="" />
                    <div>
                        <h2>Who We Are?</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
                            laudantium ipsam perspiciatis commodi sequi, dignissimos reiciendis
                            saepe id rem voluptatem dolor aspernatur, earum odio placeat numquam
                            fugiat ex, sapiente tempora.
                        </p>
                        <abbr title="">
                            Create stunning images with as much or as little control as you like
                            thanks to a choice of Basic and Creative modes
                        </abbr>
                        <br />
                        <br />
                        <marquee bgcolor="#ccc" loop={-1} scrollamount={5} width="100%">
                            Create stunning images with as much or as little control as you like
                            thanks to a choice of Basic and Creative modes
                        </marquee>
                    </div>
                </section>
                <section id="about-app" className="section-p1">
                    <h1>
                        Download Our <a href="#">App</a>
                    </h1>
                    <div className="video">
                        <video autoPlay="" muted="" loop="" src="img/about/1.mp4" />
                    </div>
                </section>
                <section id="feature" className="section-p1">
                    <div className="fe-box">
                        <img src="img/features/f1.png" alt="" />
                        <h6>Free Shipping</h6>
                    </div>
                    <div className="fe-box">
                        <img src="img/features/f2.png" alt="" />
                        <h6>Online Order</h6>
                    </div>
                    <div className="fe-box">
                        <img src="img/features/f3.png" alt="" />
                        <h6>Save Money</h6>
                    </div>
                    <div className="fe-box">
                        <img src="img/features/f4.png" alt="" />
                        <h6>Promotions</h6>
                    </div>
                    <div className="fe-box">
                        <img src="img/features/f5.png" alt="" />
                        <h6>Happy Sell</h6>
                    </div>
                    <div className="fe-box">
                        <img src="img/features/f6.png" alt="" />
                        <h6>F24/7 Support</h6>
                    </div>
                </section>
                <NewLetter/>
                <Footer></Footer>
            </>

        )
    }

}

export default About