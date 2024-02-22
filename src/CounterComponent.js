import React from 'react';

class Counter extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        count: props.initialValue
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
}

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return React.createElement('div', null,
            React.createElement('p', null, `Count: ${this.state.count}`),
            React.createElement('button', {onClick:this.decrement}, 'Decrement'),
            React.createElement('button', {onClick:this.increment}, 'Increment'))
    }
}

export default Counter;
