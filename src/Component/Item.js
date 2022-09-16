import React from 'react'
import { Component } from 'react'

class Item extends Component {
    render() {
        return (
            <tbody>
                    <tr>
                        <td>
                            <a href="#">
                                <i className="far fa-times-circle" />
                            </a>
                        </td>
                        <td>
                            <img src="img/products/f1.jpg" alt="" />
                        </td>
                        <td>Cartoon Astronaut T-Shirts</td>
                        <td>$118.19</td>
                        <td>
                            <input type="number" defaultValue={1} />
                        </td>
                        <td>$118.19</td>
                    </tr>
                </tbody>
        )
    }

}

export default Item