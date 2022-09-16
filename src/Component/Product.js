import React from 'react'
import { Component } from 'react'
import Sproduct from '../Web/Sproduct'
import { Link } from 'react-router-dom';

class Product extends Component {
    handleClick = () => {
        <Sproduct></Sproduct>
    };
    render() {
        var { product } = this.props;
        return (
            <div className="pro-container">
                <div className="pro" >
                    <Link to="/sproduct">
                        <a><img src={product.image} alt={product.name} /></a>
                    </Link>
                    <div className="des">
                        <span>adidas</span>
                        <h5>{product.name}</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>${product.price}</h4>
                    </div>
                    <li href="#">
                        <i className="fal fa-shopping-cart cart" onClick={() => this.onAddToCart(product)} />
                    </li>
                </div>
                <div className="pro" >
                    <Link to="/sproduct">
                        <img src={product.image} alt={product.name} />
                    </Link>
                    <div className="des">
                        <span>adidas</span>
                        <h5>{product.name}</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>${product.price}</h4>
                    </div>
                    <li href="#">
                        <i className="fal fa-shopping-cart cart" />
                    </li>
                </div>
                <div className="pro" >
                    <Link to="/sproduct">
                        <a><img src={product.image} alt={product.name} /></a>
                    </Link>
                    <div className="des">
                        <span>adidas</span>
                        <h5>{product.name}</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>${product.price}</h4>
                    </div>
                    <a href="#">
                        <i className="fal fa-shopping-cart cart" />
                    </a>
                </div>
                <div className="pro" >
                    <Link to="/sproduct">
                        <a><img src={product.image} alt={product.name} /></a>
                    </Link>
                    <div className="des">
                        <span>adidas</span>
                        <h5>{product.name}</h5>
                        <div className="star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <h4>${product.price}</h4>
                    </div>
                    <a href="#">
                        <i className="fal fa-shopping-cart cart" />
                    </a>
                </div>
            </div>
        )
    }

}

export default Product