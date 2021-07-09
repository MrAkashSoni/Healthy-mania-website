import React, { Component } from 'react';

import store from '../../store';
import Breadcrumb from "../common/breadcrumb";
import { loginUser } from '../../actions/authActions';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {},
            userDetail: {}
        }
        console.log('getState', store.getState())
    }

    handleChange = (e) => {
        const obj = { ...this.state.data }
        obj[e.target.name] = e.target.value;
        this.setState({
            data: obj,
        })
    }

    handleSubmit = async () => {
        console.log('store.dispatch', store.dispatch)
        const res = await store.dispatch(loginUser(this.state.data));
        if (res) {
            this.props.history.push({
                pathname: '/dashboard',
            })
        }
    }

    render() {
        return (
            <div>
                <Breadcrumb title={'Login'} />
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    {/* <form className="theme-form"> */}
                                    <div className="theme-form"></div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                            name="email"
                                            required=""
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="review">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter your password"
                                            name="password"
                                            required=""
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <button className="btn btn-solid" onClick={this.handleSubmit}>Login</button>
                                    {/* </form> */}
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <a href="/pages/register" className="btn btn-solid">Create an Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Login;