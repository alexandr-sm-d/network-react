import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    counter() {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentWillMount() {
        console.log('COUNTER: componentWillMount')
    }

    componentWillUnmount() {
        console.log('COUNTER: componentWillUnmount')
    }

    componentDidMount() {
        console.log('COUNTER: componentDidMount')
    }

    componentDidUpdate() {
        console.log('COUNTER: componentDidUpdate')
    }

    componentWillUpdate() {
        console.log('COUNTER: componentWillUpdate')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('COUNTER: shouldComponentUpdate');
        console.log(this.state, nextState)
        return nextProps !== this.props || nextState !== this.state;
    }

    render() {
        console.log('COUNTER: render')
        return (
            <div>
                <span>You clicked {this.state.count}!</span>
                <button onClick={this.counter.bind(this)}>counter</button>
            </div>
        )
    }
}

console.log(new Counter())

export default Counter