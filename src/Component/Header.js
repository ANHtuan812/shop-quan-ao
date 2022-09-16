import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <section id="header">
                <a href="#">
                    <img src="img/logo.png" className="logo" alt="" />
                </a>
                <div>
                    <ul id="navbar">
                        <li>
                            {/* <a href="index.html">
                                Home
                            </a> */}
                            <Link to="/home">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            {/* <a href="shop.html">Shop</a> */}
                            <Link to="/shop">
                                <a>
                                    Shop
                                </a>
                            </Link>

                        </li>
                        <li>
                            {/* <a href="blog.html">Blog</a> */}
                            <Link to="/Blog">
                                <a>
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            {/* <a href="about.html">About</a> */}
                            <Link to="/About">
                                <a>
                                    About
                                </a>
                            </Link>
                        </li>
                        <li>
                            {/* <a href="contact.html">Contact</a> */}
                            <Link to="/Contact">
                                <a>
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li>
                            {/* <a href="cart.html">
                                <i className="fas fa-shopping-bag" />
                            </a>{" "} */}
                            <Link to="/cart">
                                <a>
                                <i className="fas fa-shopping-bag" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Header;