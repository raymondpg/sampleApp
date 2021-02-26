import React, {Component} from "react";
import "./Schedule.css"

class Schedule extends Component {

    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    hours = ["11am-12pm", "12pm-1pm", "1pm-2pm", "2pm-3pm", "3pm-4pm", 
    "4pm-5pm", "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm"]
    schedules = ["Mechanical", "Electrical"]

    constructor(props) {
        super(props);
        this.state = {
            schedule: null,
            scheduleData: null
        }
    }

    choices = 
    <div>
        <p id = "scheduleLabel">
            Schedule
        </p>
        <select id = "selection">
            {this.schedules.map((day,index) => {
                return <option>{day}</option>
            })}
        </select>
    </div>

    topLine = 
    (
    <div>
        <div id = "blankBlock" style={{backgroundColor: "white"}}>  </div>
        {this.days.map((day,index) => {
            return<div id = "blankBlock" style={{backgroundColor: "white"}}>{day}</div>
        })}
    </div>
    )

    colors = ["lightgreen", "green"]

    componentDidMount() {
        let onesArray = this.hours.map((hour, hourIndex) => {
            return this.days.map((day, dayIndex) => {
                return (hourIndex + dayIndex)%2
            })
        })
        let sched = this.topLine
        let gridBody = (
            <div>
            {this.topLine}
            {this.hours.map((hour,row) => {
                return <div>
                         <div id = "blankBlock" style={{backgroundColor: "white"}}>{hour}</div>
                            {this.days.map((day,col) => {
                                return<div id = "colorBlock" style={{backgroundColor: this.colors[onesArray[row][col]]}}></div>
                            })}
                        </div>
            })}
            </div>
        )
            
        
        this.setState({
            scheduleData : onesArray,
            schedule: gridBody
        })
    }

    render() {
        return (
            <div>
                <div id="gridContainer">
                    {this.choices}
                    {this.state.schedule}
                </div>
            </div>
        )
    }
}

export default Schedule;