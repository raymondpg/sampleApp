import React, {Component} from "react";
import {
    Link
  } from "react-router-dom";
import TextHandler from "./Components/TextHandler"
import ObscuredTextHandler from "./Components/ObscuredTextHandler"

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            obscuredPass: ""
        };
    }

    onChangeUser = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    onChangePass = (event) => {
        let eventString = event.target.value;
        let pass = this.state.password;
        let passLength = pass.length;
        let obscPass = this.state.obscuredPass;
        if(eventString.length < passLength) {
            pass = pass.substring(0,passLength-1);
            obscPass = obscPass.substring(0,passLength-1);
        } else {
            pass += eventString.charAt(eventString.length-1);
            obscPass += "*";
        }
        this.setState({
            password: pass,
            obscuredPass: obscPass
        });
    };

    render() {
        return(
            <div>
                <div
                    style = {{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#202020",
                    }}
                />
                <p style = {{
                    position: "absolute",
                    top: "25%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontSize: "30px",
                    textAlign: "center",
                    color: "#ffffff",
                    width: "30%"
                }}
                >Log In!</p>
                <div style = {{
                    display: "block",
                    position: "absolute",
                    top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "#505050",
                    width: "290px",
                    height: "220px",
                    borderRadius: "15px"}}>
                    <TextHandler
                        valueUser={this.state.username}
                        onChangeUser={this.onChangeUser}
                        name={"New User"}
                    />
                    <label style = {{display: "block", textAlign: "center", margin: "auto", color: "white", marginTop: "5px"}}>
                        Already Entered
                    <select style = {{display: "block", textAlign: "center", margin: "auto", marginTop: "5px"}}>
                        <option>
                            Name One
                        </option>
                    </select>
                    </label>
                    <Link to = {"/userInteract"}>
                    <button
                        style = {{
                            display: "inline",
                            marginLeft: "50%",
                            marginTop: "20px",
                            marginBottom: "15px",
                            width: "50%",
                            height: "30px",
                            transform: "translate(-50%,0)",
                            backgroundColor: "#808080",
                            border: "none",
                            color: "white"}}
                    >
                        Change Schedule
                    </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;