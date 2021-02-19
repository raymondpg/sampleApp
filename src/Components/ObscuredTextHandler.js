import React, {Component} from "react";

class ObscuredTextHandler extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style = {{marginTop: "5%"}}>
                <label style = {{display: "block", textAlign: "center", marginBottom: "5px", marginTop: "5px", color: "white"}}>
                    {this.props.name}
                    <input
                        style = {{display: "block", textAlign: "center", margin: "auto"}}
                        value={this.props.valuePass}
                        onChange={this.props.onChangePass}
                    />
                </label>
            </div>
        )
    }
}

export default ObscuredTextHandler;