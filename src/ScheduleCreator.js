import React, {Component} from "react";
import ColorChangeButton from "./Components/ColorChangeButton"
import "./ScheduleCreator.css"
import {
    Link
  } from "react-router-dom";
import ScheduleItem from "./Components/ScheduleItem"

class scheduleCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zeroArray: []
        }
    }

    componentDidMount() {
        let newArr = []
        for(let i = 0; i < this.days.length; i++) {
            newArr.push([]);
            for(let j = 0; j < this.hours.length; j++) {
                newArr[i].push(0);
            }
        }
        let schedArray = [];
        for(let i = 0; i < this.schedules.length; i++) {
            schedArray.push(0);
        }
        this.setState ({
            avaiArray: newArr,
            schedArr: schedArray
        })
    }

    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    hours = ["11am-12pm", "12pm-1pm", "1pm-2pm", "2pm-3pm", "3pm-4pm", 
    "4pm-5pm", "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm"]
    schedules = ["Mechanical", "Electrical"]

    itemList = this.hours.map((day,dayIndex)=>{
        return <div id="gridRow" key ={dayIndex}> {this.days.map((hour,hourIndex)=>{
            return <ColorChangeButton row = {hourIndex} col = {dayIndex}
             key = {hourIndex} clickFunc = {(r, c, n) => this.alter(r, c ,n)}/>
          })} </div>
    });

    hourCols = this.hours.map((hour, index) => {
        return <p id="hourText" key = {index}>{hour}</p>
    })

    dayRows = this.days.map((day, index) => {
        return <p id="dayText" key = {index}>{day}</p>
    })

    alter = (row, col, newVal) => {
        let updatedArray = this.state.avaiArray;
        updatedArray[row][col] = newVal
        this.setState({
            avaiArray: updatedArray
        })
    }

    alterTeams = (num, newVal) => {
        let updatedArray = this.state.schedArr;
        updatedArray[num] = newVal
        this.setState({
            schedArr: updatedArray
        })
    }

    scheds = this.schedules.map((schedule, index) => {
        return <ScheduleItem label = {schedule} clickFunc = {(n, nv) => this.alterTeams(n, nv)}
         num = {index}></ScheduleItem>
    })

    render() {
        return (
            <div>
                <div id="schedList">
                    {this.scheds}
                </div>
                <div id="gridBlock">
                    <div id="topText">
                        {this.dayRows}
                    </div>
                    <div id="centralContent">
                        <div id="sideText">
                            {this.hourCols}
                        </div>
                        <div id="fullGrid">
                            {this.itemList}
                        </div>
                    </div>
                    <div id="botText">
                        <button id="updateButton">Update</button>
                    </div>
                    <div id="botText">
                        <Link
                            to = {"/"}>
                            <button id="returnButton">Return To Main Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


}

export default scheduleCreator;