import React, { Component } from 'react';

// class컴포넌트는 변경에 따라 그려질 때마다, 
// 자기가 선언한 메서드 들을 사용한다.

export default class ClassComponent extends Component {
    constructor(props){ // constructor - state초기화 및 메서드의 바인딩
        super(props);
        console.log("constructor");
        this.state = { date: new Date() };
        // this.handleClick = this.handleClick.bind(this);
        // this.handleClick이라는 애 한테 나 자신을 알려주는 것.
        // class컴포넌트의 영역이라
    }
    // this.의 개념은? -> 아래 매서드에서 사용하고 있는 것들이
    // 어느 영역에서 사용하는지 알 수 있는 방법이 없는데,
    // 
    // bind해줘야 한다. 왜? -> event를 찾을 수 없으니까 위치를 알려줘야하고, 선언해줘야한다.
    // constructor에 선언 해주는것 or arrowFunction을 사용하면 된다.
    // arrowFunction은 외부랑 컨택이 가능해서, this가 누군지 알 수 있다.

    componentDidMount() { // componentDidMount - Dom노드 초기화 및 데이터 fetch
        console.log("componentDidMount");
        this.timeID = setInterval(() => this.tick(), 10000);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    // mount와 update는 두개 다 불린다

    componentWillUnmount() { // componentWillUnmount -  - 타이머 제거 및 요청 취소, 구독해제 등
        console.log("componentWillUnmount");
        clearInterval(this.timeID);
    }

    tick() {
        console.log("tick");
        this.setState({date : new Date()});
    }

    handleClick = () => {
        alert (this.state.date);
    }

    render() {
        console.log("render");
        return (
        <div>
            <h2 onClick={this.handleClick}>hellow world</h2>
            <h3>{this.state.date.toLocaleTimeString()}</h3>
        </div>)
    }
}
