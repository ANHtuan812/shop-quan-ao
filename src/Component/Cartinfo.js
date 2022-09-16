import React from 'react'
import { Component } from 'react'

class Cartinfo extends Component {
    render() {
        return (
            <section id="cart-add" className="section-p1">
                    <div id="coupon">
                        <h3>Apply Coupon</h3>
                        <div>
                            <input type="text" placeholder="Enter Your Coupon" />
                            <button className="normal">Apply</button>
                        </div>
                    </div>
                    <div id="subtotal">
                        <h3>Cart Totals</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Cart Subtotal</td>
                                    <td>$335</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Total</strong>
                                    </td>
                                    <td>
                                        <strong>$335</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="normal">Proceed to checkout</button>
                    </div>
                </section>
        )
    }

}

export default Cartinfo