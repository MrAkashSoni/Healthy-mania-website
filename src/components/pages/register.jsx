import React, {Component} from 'react';

import Breadcrumb from "../common/breadcrumb";

class Register extends Component {

    constructor (props) {
        super (props);
    }

    state = {
        data: { },
    }

    handleChange = (e) => {
        const obj = {...this.state.data}
        obj[e.target.name] = e.target.value;
        this.setState({
            data: obj,
        })
    }

    handleSubmit = () => {
        console.log('this.state.data', this.state.data)
    }

    render (){
        return (
            <div>
                <Breadcrumb title={'create account'}/>
  
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    {/* <form className="theme-form"> */}
                                    <div className="theme-form">
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="fname"
                                                    placeholder="First Name"
                                                    required="" 
                                                    name="first_name"
                                                    onChange={this.handleChange}
                                                    />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Last Name</label>
                                                <input 
                                                    type="text"
                                                    className="form-control" 
                                                    id="lname"
                                                    placeholder="Last Name" 
                                                    name="last_name"
                                                    required="" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
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
                                            <div className="col-md-6">
                                            <label htmlFor="pnumber">Phone number</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="pnumber"
                                                    placeholder="Phone Number"
                                                    required="" 
                                                    name="phone_number"
                                                    onChange={this.handleChange}
                                                    />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="password">Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    name="password1" 
                                                    required="" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="password">Confirm Password</label>
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="cpassword"
                                                    placeholder="Reenter your password"
                                                    name="password2"
                                                    required="" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="form-row">
                                            <div className="col-md-6">
                                            <label htmlFor="referal">Referral  Code</label>
                                                <input 
                                                    type="text"
                                                    className="form-control" 
                                                    id="rcode"
                                                    placeholder="Referral Code" 
                                                    name="ref_code" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                            <button className="btn btn-solid" onClick={this.handleSubmit}>create Account</button>
                                    {/* </form> */}
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

export default Register