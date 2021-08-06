import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { COUNTRY_CODE, MERCHANT_PHONE_NUMBER } from '../../../../constants/Info';

class TopBarDark extends Component {


    render() {
        return (
            <div className="top-header top-header-dark3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>Welcome to Our store Healthy Mania</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: +{COUNTRY_CODE} - {MERCHANT_PHONE_NUMBER}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist"><a href="#"><i className="fa fa-heart"
                                    aria-hidden="true"></i> wishlist</a></li>
                                <li className="onhover-dropdown mobile-account">
                                    <i className="fa fa-user" aria-hidden="true"></i> My Account
                                    <ul className="onhover-show-div">
                                        <li>
                                            <a href="#" data-lng="en">
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-lng="es">
                                                Register
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TopBarDark;