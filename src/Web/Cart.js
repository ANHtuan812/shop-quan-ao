import React from 'react'
import { Component } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import CartAdd from '../Component/CartAdd'
import Cartinfo from '../Component/Cartinfo'

class Cart extends Component {
    render() {
        return (
            <>
                <Header></Header>
                <section id="page-header" className="about-header">
                    <h2>#let's_talk</h2>
                    <p>LEAVE A MESSAGE, We love to hear from you!</p>
                </section>
                <section id="cart" className="section-p1">
                    <CartAdd></CartAdd>
                </section>
                <Cartinfo></Cartinfo>
                <Footer></Footer>
            </>

        )
    }

}

export default Cart