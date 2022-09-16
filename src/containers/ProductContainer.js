import React, { Component } from 'react'
import { connect } from 'react-redux';
import Shop from '../Web/Shop';


class ProductContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Shop products={products}/>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductContainer);