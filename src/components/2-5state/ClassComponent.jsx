import React, { Component } from "react";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // 그려 지자 마자 호출되는 메서드
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    // 
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
            <h1>This Class Component</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
