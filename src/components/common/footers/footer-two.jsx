import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoImage from "../headers/common/logo"
import { SlideUpDown } from "../../../services/script";

import { MERCHANT_EMAIL_ID } from '../../../constants/Info';

class FooterTwo extends Component {

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
            <footer className="footer-light pet-layout-footer">
                <div className="white-layout">
                    <div className="container">
                        <section className="small-section">
                            <div className="row footer-theme2">
                                <div className="col">
                                    <div className="footer-link link-white">
                                        <div className="footer-brand-logo">
                                            <LogoImage logo={this.props.logoName} />
                                        </div>
                                        <div className="social-white">
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
                        </section>
                    </div>
                </div>
                <div className="sub-footer black-subfooter">
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
        );
    }
}

export default FooterTwo;