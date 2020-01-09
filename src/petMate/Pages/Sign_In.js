import React, { Component } from 'react';
import { Link/*, useHistory*/ } from 'react-router-dom';
import "../../sass/fragments/sign_in.scss";

export default class Sign_In extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            u_name: "phileo",
            pass: "111111",
            x: "",
        }
    }

    handleSubmit = (e) => {
        // const history = useHistory();
        // history.push("/")
        localStorage.setItem("name", this.state.username);
        let test = this.state.username === "" || this.state.username === ""
        if (test) {

        }
        else {
            e.preventDefault();
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
                <h1>Login</h1>
                <p>{this.state.x}</p>
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
                    <button onClick={this.handleSubmit}>Login</button>
                    <p>Don't have an account? Sign up <Link to="/register">here</Link></p>
                </div>
            </form>
        )
    }
}
