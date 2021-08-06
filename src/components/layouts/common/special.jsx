import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { getSingleItem, getSpecialCollection } from '../../../services/index'
import {
    addToCart,
    addToWishlist,
    incrementQty,
    decrementQty,
    removeFromCart
} from "../../../actions/index";
import ProductItem from './special-product-item';

class Special extends Component {

    render() {

        const { product, symbol, addToCart, addToWishlist, incrementQty, decrementQty, removeFromCart } = this.props;

        console.log('product', product)
        return (
            <div>
                {/*Paragraph*/}

                <section className="section-b-space addtocart_count">
                    <div className="full-box">
                        <div className="container">
                            <div className="title4">
                                <h2 className="title-inner4">special products</h2>
                                <div className="line"><span></span></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="theme-card center-align">
                                        <div className="offer-slider">
                                            <div className="sec-1">
                                                <div className="product-box2">
                                                    <div className="media">
                                                        <Link to={`${process.env.PUBLIC_URL}/product?id=${product[0].id}`} >
                                                            <img
                                                                className="img-fluid blur-up lazyload"
                                                                src={product[0].picture} alt="" />
                                                        </Link>
                                                        <div className="media-body align-self-center">
                                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                    className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i
                                                                            className="fa fa-star"></i></div>
                                                            <Link to={`${process.env.PUBLIC_URL}/product?id=${product[0].id}`} >
                                                                <h6>{product[0].name}</h6>
                                                            </Link>
                                                            <h4>{symbol}{product[0].price - (product[0].price * product[0].discount / 100)}
                                                                <del><span className="money">{symbol}{product[0].price}</span></del>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-box2">
                                                    <div className="media">
                                                        <Link to={`${process.env.PUBLIC_URL}/product?id=${product[0].id}`} >
                                                            <img
                                                                className="img-fluid blur-up lazyload"
                                                                src={product[0].picture} alt="" />
                                                        </Link>
                                                        <div className="media-body align-self-center">
                                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                    className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i
                                                                            className="fa fa-star"></i></div>
                                                            <Link to={`${process.env.PUBLIC_URL}/product?id=${product[0].id}`} >
                                                                <h6>{product[0].name}</h6>
                                                            </Link>
                                                            <h4>{symbol}{product[0].price - (product[0].price * product[0].discount / 100)}
                                                                <del><span className="money">{symbol}{product[0].price}</span></del>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 center-slider">
                                    <div>
                                        <div className="offer-slider">
                                            {/* <div>
                                                <ProductItem
                                                    product={product[0]} symbol={symbol}
                                                    onAddToWishlistClicked={() => addToWishlist(product[0])}
                                                    onAddToCartClicked={() => addToCart(product[0], 1)}
                                                    onIncrementClicked={() => incrementQty(product[0], 1)}
                                                    onDecrementClicked={() => decrementQty(product[0].id)}
                                                    onRemoveFromCart={() => removeFromCart(product[0])} />
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="theme-card center-align">
                                        <div className="offer-slider">
                                            <div className="sec-1">
                                                <div className="product-box2">
                                                    <div className="media">
                                                        <Link to={`${process.env.PUBLIC_URL}/product?id=${product[0].id}`} >
                                                            <img
                                                                className="img-fluid blur-up lazyload"
                                                                src={product[0].picture} alt="" />
                                                        </Link>
                                                        <div className="media-body align-self-center">
                                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                    className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i
                                                                            className="fa fa-star"></i></div>
                                                            <Link to={`${process.env.PUBLIC_URL}/product?id=${product[0].id}`} >
                                                                <h6>{product[0].name}</h6>
                                                            </Link>
                                                            <h4>{symbol}{product[0].price - (product[0].price * product[0].discount / 100)}
                                                                <del><span className="money">{symbol}{product[0].price}</span></del>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-box2">
                                                    <div className="media">
                                                        <Link to={`${process.env.PUBLIC_URL}/product?id=${product[0].id}`} >
                                                            <img
                                                                className="img-fluid blur-up lazyload"
                                                                src={product[0].picture} alt="" />
                                                        </Link>
                                                        <div className="media-body align-self-center">
                                                            <div className="rating"><i className="fa fa-star"></i> <i
                                                                className="fa fa-star"></i> <i
                                                                    className="fa fa-star"></i> <i
                                                                        className="fa fa-star"></i> <i
                                                                            className="fa fa-star"></i></div>
                                                            <Link to={`${process.env.PUBLIC_URL}/product?id=${product[0].id}`} >
                                                                <h6>{product[0].name}</h6>
                                                            </Link>
                                                            <h4>{symbol}{product[0].price - (product[0].price * product[0].discount / 100)}
                                                                <del><span className="money">{symbol}{product[0].price}</span></del>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

// const mapStateToProps = (state, Ownprops) => ({
//     product: getSpecialCollection(state.data.products, Ownprops.type),
//     symbol: state.data.symbol
// })

export default Special;