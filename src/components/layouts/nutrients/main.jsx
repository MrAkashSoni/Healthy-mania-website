import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Import custom components
import store from '../../../store';
import Tranding from "./tranding"
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script";

import {
    addToCart,
    addToWishlist,
    incrementQty,
    decrementQty,
    removeFromCart
} from "../../../actions";

import HeaderTwo from "../../common/headers/header-two"
import FooterOne from "../../common/footers/footer-one"
import ThemeSettings from "../../common/theme-settings"

class Vegetables extends Component {
    async componentDidMount() {
        document.getElementById("color").setAttribute("href", `#`);
    }


    render() {

        const { products, symbol } = store.getState().data;

        console.log('produrrrrrr', store.getState().data)
        const handleAddToCart = (product) => {
            console.log('handleAddToCart', product);
            store.dispatch(addToCart(product, 1))
        }

        const handleAddToWishList = (product) => {
            console.log('handleAddToWishList', product);
            store.dispatch(addToWishlist(product))
        }

        const handleDecrementQty = (product_id) => {
            console.log('handleDecrementQty', product_id);
            store.dispatch(decrementQty(product_id))
        }

        const handleIncrementQty = (product) => {
            console.log('handleIncrementQty', product);
            store.dispatch(incrementQty(product, 1))
        }

        const handleRemoveFromCart = (product) => {
            console.log('handleRemoveFromCart', product);
            store.dispatch(removeFromCart(product))
        }

        return (
            <div>
                <Helmet>
                    <title>Healthy Mania | Nutritions</title>
                </Helmet>
                <HeaderTwo logoName={'logo.png'} />
                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home39 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>save 10%</h4>
                                                    <h1>fresh vegetables.</h1><a href="/shop" className="btn btn-solid">shop
                                                        now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home38 text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>save upto 10%</h4>
                                                    <h1>fresh vegetables</h1><a href="/shop" className="btn btn-solid">shop
                                                        now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*collection banner layout*/}
                <section className="banner-padding absolute-banner pb-0">
                    <div className="container absolute-bg">
                        <div className="service p-0">
                            <div className="row">
                                <div className="col-md-4 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                        <div className="media-body">
                                            <h4>free shipping</h4>
                                            <p>free shipping world wide</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                        <div className="media-body">
                                            <h4>24 X 7 service</h4>
                                            <p>online service for new customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 service-block">
                                    <div className="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                        <div className="media-body">
                                            <h4>festival offer</h4>
                                            <p>new online special festival offer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*collection banner layout end*/}

                {/*product section Start*/}
                <Tranding
                    products={products}
                    symbol={symbol}
                    addToCart={handleAddToCart}
                    addToWishlist={handleAddToWishList}
                    incrementQty={handleIncrementQty}
                    decrementQty={handleDecrementQty}
                    removeFromCart={handleRemoveFromCart}
                />

                {/*product section End*/}

                {/*Parallax banner*/}
                <section className="p-0">
                    <div className="full-banner parallax-banner15 parallax text-left p-left">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="banner-contain">
                                        <h2>2018</h2>
                                        <h3>food market</h3>
                                        <h4>special offer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Parallax banner end*/}

                {/*product-box slider*/}
                {/* <Special
                    products={products}
                    symbol={Symbol}
                    addToCart={handleAddToCart}
                    addToWishlist={handleAddToWishList}
                    incrementQty={handleIncrementQty}
                    decrementQty={handleDecrementQty}
                    removeFromCart={handleRemoveFromCart}
                /> */}
                {/*product-box slider end*/}

                <ThemeSettings />
                <FooterOne logoName={'logo.png'} />
            </div>
        )
    }
}


export default Vegetables