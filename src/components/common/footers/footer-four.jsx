import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SlideUpDown } from "../../../services/script"
import LogoImage from "../headers/common/logo"
import { COUNTRY_CODE, MERCHANT_PHONE_NUMBER, MERCHANT_EMAIL_ID } from '../../../constants/Info';

class FooterFour extends Component {

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
            <footer className="">
                <div className="white-layout">
                    <div className="container">
                        <section className="small-section">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3">
                                    <div className="subscribe">
                                        <h4>newsletter</h4>
                                        <form className="form-inline subscribe-form classic-form">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleFormControlInput"
                                                    placeholder="Enter your email" />
                                            </div>
                                            <button type="submit" className="btn btn-solid">subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="section-b-space darken-layout">
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
                <div className="sub-footer dark-subfooter">
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

export default FooterFour;