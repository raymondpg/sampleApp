import React, {Component} from "react";
import "./Buttons.css"

class ColorChangeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonState: 0,
            buttonColor: "lightcoral"
        }
    }
    render() {
        return(
            <button id= "ccButton" onClick = {this.onclick} style = {{backgroundColor: this.state.buttonColor}}>
            </button>
        )
    }

    onclick = () => {
        this.props.clickFunc(this.props.row, this.props.col, 
            (this.state.buttonState+1)%2)
        if(this.state.buttonState == 0) {
            this.setState({
                buttonState: 1,
                buttonColor: "lightgreen"
            })
        } else {
            this.setState({
                buttonState: 0,
                buttonColor: "lightcoral"
            })
        }
    }
}

export default ColorChangeButton;