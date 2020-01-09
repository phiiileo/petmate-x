import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../../sass/fragments/sign_in.scss";
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            email: "",
            username: "",
            password: "",
        }
    }

    handleSubmit = (e) => {
        let test = this.state.username === "" || this.state.username === ""
        if (test) {

        }
        else {
            let check_username = this.state.username === this.state.u_name;
            let check_pass = this.state.username === this.state.u_name
            if (check_username && check_pass) {
                this.setState({ x: "Welcome " + this.state.username })
            } else {
                this.setState({ x: "Welcome Anonymous" })
            }
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {


        return (
            <form className="form1">
                <h1>Register</h1>

                <div className="form_group">
                    <label>Full Name(firstname first): </label>
                    <span>
                        <input
                            type="fullname"
                            placeholder="Enter your fullname"
                            name="fullname"
                            value={this.state.fullname}
                            onChange={this.handleChange}
                            required
                        />
                        <i className="fa fa-user-circle"></i>
                    </span>
                </div>

                <div className="form_group">
                    <label>Email address: </label>
                    <span>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <i className="fa fa-envelope"></i>
                    </span>
                </div>

                <div className="form_group">
                    <label>Username: </label>
                    <span>
                        <input
                            type="username"
                            placeholder="Enter your username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                        <i className="fa fa-user"></i>
                    </span>
                </div>

                <div className="form_group">
                    <label>Password: </label>
                    <span>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        <i className="fa fa-lock"></i>
                    </span>
                </div>

                <div>
                    <button onClick={this.handleSubmit}>Register</button>
                    <p>Have an account? Login <Link to="/sign-in">here</Link></p>

                </div>
            </form>
        )
    }
}
