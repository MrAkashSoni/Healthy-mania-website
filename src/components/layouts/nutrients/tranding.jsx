import React, { Component } from 'react';
import Slider from 'react-slick';

import { Product4 } from '../../../services/script'

import ProductItem from '../common/special-product-item';

class Tranding extends Component {

    render() {

        const {
            products,
            symbol,
            addToCart,
            addToWishlist,
            incrementQty,
            decrementQty,
            removeFromCart
        } = this.props;

        console.log('products', products)

        return (
            <div>
                {/*Paragraph*/}
                <section className="section-b-space addtocart_count ratio_square">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="title4">
                                    <h2 className="title-inner4">trending products</h2>
                                    <div className="line"><span></span></div>
                                </div>
                                <Slider {...Product4} className="product-4 product-m no-arrow">
                                    {products.map((product, index) =>
                                        <div key={index}>
                                            {console.log('single prod symbol', symbol)}
                                            <ProductItem
                                                product={product}
                                                symbol={symbol}
                                                onAddToWishlistClicked={() => addToWishlist(product)}
                                                onAddToCartClicked={() => addToCart(product, 1)}
                                                onIncrementClicked={() => incrementQty(product, 1)}
                                                onDecrementClicked={() => decrementQty(product.id)}
                                                onRemoveFromCart={() => removeFromCart(product)}
                                                key={index} />
                                        </div>)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Tranding;