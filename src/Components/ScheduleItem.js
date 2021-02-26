import React, {Component} from "react";
import "./Buttons.css"

class ScheduleItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonColor: "lightcoral",
            buttonText: "Non-member",
            buttonState: 0
        }
    }
    render() {
        return <div id="schedItemContainer">
                    <p id="label">{this.props.label}</p>
                    <button id="scheduleButton" onClick = {this.onClick} style = {{backgroundColor: this.state.buttonColor}}>
                        {this.state.buttonText}</button>
                </div>
    }
    onClick = () => {
        this.props.clickFunc(this.props.num, (this.state.buttonState+1)%2);
        if(this.state.buttonState === 0) {
            this.setState({
                buttonState: 1,
                buttonColor: "lightgreen",
                buttonText: "Member"
            })
        } else {
            this.setState({
                buttonState: 0,
                buttonColor: "lightcoral",
                buttonText: "Non-member"
            })
        }
    }
}

export default ScheduleItem
