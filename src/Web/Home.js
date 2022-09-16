import React, { Component } from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import NewLetter from '../Component/NewLetter';
import Feature from '../Component/Feature';
import Product from '../Component/Product';
import Banner from '../Component/Banner';
import Hreo from '../Component/Hreo';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        var { products } = this.props;
        return (
            <>
                    <Header></Header>
                
                    <Hreo></Hreo>
                
                
                    <Feature></Feature>
                
                <section id="product1" className="section-p1">
                    <h2>Featured Products</h2>
                    <p>Summer Collection New Morden Design</p>
                    {this.showProducts(products)}
                </section>
                
                    <Banner></Banner>
                
                <section id="product1" className="section-p1">
                    <h2>New Arrivals</h2>
                    <p>Summer Collection New Morden Design</p>
                    {this.showProducts(products)}
                </section>
                <section id="sm-banner" className="section-p1">
                    <div className="banner-box">
                        <h4>crazy deals</h4>
                        <h2>buy 1 get 1 free</h2>
                        <span>The best classic dress is on sale at cara</span>
                        <button className="white">Learn More</button>
                    </div>
                    <div className="banner-box banner-box2">
                        <h4>spring/summer</h4>
                        <h2>upcoming season</h2>
                        <span>The best classic dress is on sale at cara</span>
                        <button className="white">Collection</button>
                    </div>
                </section>
                <section id="banner3">
                    <div className="banner-box">
                        <h2>SEASONAL SALE</h2>
                        <h3>Winter Collection -50% OFF</h3>
                    </div>
                    <div className="banner-box banner-box2">
                        <h2>NEW FOOTWEAR COLLECTION</h2>
                        <h3>Sprong/Summer 2022</h3>
                    </div>
                    <div className="banner-box banner-box3">
                        <h2>T-SHIRTS</h2>
                        <h3>New Trendy Prints</h3>
                    </div>
                </section>
                
                    <NewLetter></NewLetter>
                
                
                    <Footer></Footer>
                
            </>


        );
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
export default connect(mapStateToProps, null)(Home)