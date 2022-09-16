import React from 'react'
import { Component } from 'react'
import Item from './Item'

class CartAdd extends Component {
    render() {
        return (
            <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <Item></Item>
            </table>
        )
    }

}

export default CartAdd