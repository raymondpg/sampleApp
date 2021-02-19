import React, {Component} from "react";

class TextHandler extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style = {{marginTop: "5%"}}>
                <label style = {{display: "block", textAlign: "center", margin: "auto", color: "white", marginTop: "5px"}}>
                    {this.props.name}
                    <input style = {{display: "block", textAlign: "center", margin: "auto"}}
                           value={this.props.valueUser}
                           onChange={this.props.onChangeUser}
                           name={this.props.name}
                    />
                </label>
            </div>
        )
    }
}

export default TextHandler;