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
                    top: "15%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontSize: "30px",
                    textAlign: "center",
                    color: "#ffffff",
                    width: "30%"
                }}
                >When2Meet+</p>
                <div style = {{
                    display: "block",
                    position: "absolute",
                    top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "#505050",
                    width: "30%",
                    height: "40%",
                    borderRadius: "15px"}}>
                    <TextHandler
                        valueUser={this.state.username}
                        onChangeUser={this.onChangeUser}
                        name={"New User"}
                    />
                    <Link to = {"/userInteract"}>
                        <button
                            style = {{
                                marginLeft: "50%",
                                marginTop: "20px",
                                marginBottom: "15px",
                                width: "40%",
                                height: "20px",
                                transform: "translate(-50%,0)",
                                backgroundColor: "#808080",
                                border: "none",
                                color: "white"}}
                        >
                            Create Profile
                        </button>
                    </Link>
                    <label style = {{display: "block", textAlign: "center", margin: "auto", color: "white", marginTop: "15px"}}>
                        Already Entered
                    <select style = {{display: "block", textAlign: "center", 
                    margin: "auto", marginTop: "5px", wdith: "50%"}}>
                        <option style = {{textAlign: "center"}}>
                            Name One
                        </option>
                        <option>
                            Someone's name
                        </option>
                    </select>
                    </label>
                    <Link to = {"/userInteract"}>
                    <button
                        style = {{
                            marginLeft: "50%",
                            marginTop: "20px",
                            marginBottom: "15px",
                            width: "40%",
                            height: "20px",
                            transform: "translate(-50%,0)",
                            backgroundColor: "#808080",
                            border: "none",
                            color: "white"}}
                    >
                        Change Availability
                    </button>
                    </Link>
                    <Link to = {"/schedules"}>
                    <button
                        style = {{
                            marginLeft: "50%",
                            marginTop: "20px",
                            marginBottom: "15px",
                            width: "60%",
                            height: "30px",
                            transform: "translate(-50%,0)",
                            backgroundColor: "black",
                            border: "none",
                            color: "white"}}
                    >
                        View Schedules
                    </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;