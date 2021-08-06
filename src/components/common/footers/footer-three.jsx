import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SlideUpDown } from "../../../services/script"
import LogoImage from "../headers/common/logo"
import { COUNTRY_CODE, MERCHANT_PHONE_NUMBER, MERCHANT_EMAIL_ID } from '../../../constants/Info';

class FooterThree extends Component {

    componentDidMount() {
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }


    render() {

        return <footer className="footer-light">
            <div className="dark-layout">
                <div className="container">
                    <section className="section-b-space border-b">
                        <div className="row footer-theme2">
                            <div className="col-lg-3">
                                <div className="footer-title footer-mobile-title">
                                    <h4>about</h4>
                                </div>
                                <div className="footer-contant">
                                    <div className="footer-logo">
                                        <LogoImage logo={this.props.logoName} />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur
                                        adipiscing</p>
                                </div>
                            </div>
                            <div className="col-lg-6 subscribe-wrapper">
                                <div className="subscribe-block">
                                    <h2>newsletter</h2>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control"
                                                id="exampleFormControlInput3" placeholder="Enter your email" />
                                            <button type="submit" className="btn btn-solid">subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-title">
                                    <h4>store information</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul className="contact-details">
                                        <li>Call Us: +{COUNTRY_CODE} - {MERCHANT_PHONE_NUMBER}8</li>
                                        <li>Email Us: <a href={`mailto:${MERCHANT_EMAIL_ID}`}>{MERCHANT_EMAIL_ID}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="sub-footer darker-subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="footer-end">
                                <p><i className="fa fa-copyright" aria-hidden="true"></i> 2021 Helthy Mania</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                            <div className="payment-card-bottom">
                                <ul>
                                    <li>
                                        <a href={`mailto:${MERCHANT_EMAIL_ID}`}><i className="fa fa-google" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href={'https://www.instagram.com/healthy_mania_?r=nametag'} target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    }
}

export default FooterThree;