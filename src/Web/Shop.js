import React, { Component } from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import NewLetter from '../Component/NewLetter';
import Product from '../Component/Product';
import { connect } from 'react-redux';


class Shop extends Component {
    render() {
        var { products } = this.props;
        return (
            <>

                <Header></Header>

                <section id="page-header">
                    <h2>#stayhome</h2>
                    <p>Save more with coupons &amp; up to 70% offf</p>
                </section>
                <section id="product1" className="section-p1">
                    {this.showProducts(products)}
                </section>
                <section id="pagination" className="section-p1">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">
                        <i className="fal fa-long-arrow-alt-right" />
                    </a>
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

export default connect(mapStateToProps, null)(Shop);