import React, {Component} from "react";
import "./Schedule.css"

class Schedule extends Component {

    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    hours = ["11:00am-11:30am", "11:30am-12:00pm",  "12:00pm-12:30pm", "12:30pm-1:00pm","1:00pm-1:30pm", "1:30pm-2:00pm", "2:00pm-2:30pm", "2:30pm-3:00pm", "3:00pm-3:30pm", 
    "3:30pm-4:00pm","4:00pm-4:30pm","4:30pm-5:00pm", "5:00pm-5:30pm","5:30pm-6:00pm", "6:00pm-6:30pm", "6:30pm-7:00pm", "7:00pm-7:30pm","7:30pm-8:00pm"]
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
            return<div id = "topBlock" style={{backgroundColor: "white"}}>{day}</div>
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