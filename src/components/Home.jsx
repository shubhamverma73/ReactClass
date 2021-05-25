import React from 'react';

class Home extends React.Component {
    constructor(props) { //Note how we pass props to the base constructor:
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


export default Home;

//These methods are called “lifecycle methods”.

//We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

//We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

/*
The componentDidMount() method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:

componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
*/

/*
We will tear down the timer in the componentWillUnmount() lifecycle method:

componentWillUnmount() {
    clearInterval(this.timerID);
}
*/