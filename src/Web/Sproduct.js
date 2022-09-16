import React from 'react'
import { Component } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Product from '../Component/Product'
import NewLetter from '../Component/NewLetter'
import { connect } from 'react-redux';


class Sproduct extends Component {
    render() {
        var { products } = this.props;
        
        // var MainImg = document.getElementById("MainImg");
        // var smalling = document.getElementsByClassName("small-img");

        // smalling[0].onclick = function () {
        //     MainImg.src = smalling[0].src;
        // }
        // smalling[1].onclick = function () {
        //     MainImg.src = smalling[1].src;
        // }
        // smalling[2].onclick = function () {
        //     MainImg.src = smalling[2].src;
        // }
        // smalling[3].onclick = function () {
        //     MainImg.src = smalling[3].src;
        // }
        return (
            <>

                <Header/>

                <section id="prodetails" className="section-p1">
                    <div className="single-pro-image">
                        <img src="img/products/f1.jpg" width="100%" id="MainImg" alt="" />
                        <div className="small-img-group">
                            <div className="small-img-col">
                                <img
                                    src="img/products/f1.jpg"
                                    width="100%"
                                    className="small-img"
                                    alt=""
                                />
                            </div>
                            {/* ban them button vao day, sau do them onclick vao button do */}
                            <div className="small-img-col">
                                <img
                                    src="img/products/f2.jpg"
                                    width="100%"
                                    className="small-img"
                                    alt=""
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src="img/products/f3.jpg"
                                    width="100%"
                                    className="small-img"
                                    alt=""
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src="img/products/f4.jpg"
                                    width="100%"
                                    className="small-img"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="single-pro-details">
                        <h6>Home / T-Shirt</h6>
                        <h4>Men's Fahion T Shirt</h4>
                        <h2>$139.00</h2>
                        <select>
                            <option> Sekect Size</option>
                            <option>XL</option>
                            <option>XXL</option>
                            <option>Small</option>
                            <option>Large</option>
                        </select>
                        <input type="number" defaultValue={1} />
                        <button className="normal">Add To Cart</button>
                        <h4>Product Details</h4>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias
                            mollitia, recusandae corrupti architecto incidunt voluptates nisi illo
                            laudantium quis ullam consequuntur. Incidunt beatae nostrum, amet quod
                            iure harum officiis!
                        </span>
                    </div>
                </section>
                <section id="product1" className="section-p1">
                    <h2>Featured Products</h2>
                    <p>Summer Collection New Morden Design</p>
                    {this.showProducts(products)}
                </section>

                <NewLetter></NewLetter>


                <Footer></Footer>


            </>

        )

    }
    showProducts(products){
        var result=null;
        if(products.length>0){
            result=products.map((product, index)=>{
                return <Product key={index} product={product}/>
            });
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, null) (Sproduct)