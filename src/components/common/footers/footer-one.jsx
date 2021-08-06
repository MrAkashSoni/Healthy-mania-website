import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SlideUpDown } from "../../../services/script"
import LogoImage from "../headers/common/logo"
import { COUNTRY_CODE, MERCHANT_PHONE_NUMBER, MERCHANT_EMAIL_ID } from '../../../constants/Info';

class FooterOne extends Component {

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

        return (
            <footer className="footer-light">
                <div className="light-layout">
                    <div className="container">
                        <section className="small-section border-section border-top-0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="subscribe">
                                        <div>
                                            <h4>KNOW IT ALL FIRST!</h4>
                                            <p>Never Miss Anything From Healthy Mania By Signing Up To Our Newsletter. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <form className="form-inline subscribe-form">
                                        <div className="form-group mx-sm-3">
                                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                                placeholder="Enter your email" />
                                        </div>
                                        <button type="submit" className="btn btn-solid">subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="section-b-space light-layout">
                    <div className="container">
                        <div className="row footer-theme partition-f">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-title footer-mobile-title">
                                    <h4>about</h4>
                                </div>
                                <div className="footer-contant">
                                    <div className="footer-logo">
                                        <LogoImage logo={this.props.logoName} />
                                    </div>
                                    <div className="footer-social">
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

                            <div className="col">
                                <div className="sub-title">

                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-title">
                                    <div className="footer-title">
                                        <h4>store information</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul className="contact-list">
                                            <li><i className="fa fa-phone"></i>Call Us: +{COUNTRY_CODE} - {MERCHANT_PHONE_NUMBER}</li>
                                            <li><i className="fa fa-envelope-o"></i>Email Us: <a
                                                href={`mailto:${MERCHANT_EMAIL_ID}`}>{MERCHANT_EMAIL_ID}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sub-footer ">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="footer-end">
                                    <p><i className="fa fa-copyright" aria-hidden="true"></i> 2021 Helthy Mania</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterOne;