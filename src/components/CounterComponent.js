import React from 'react';
import '../styles/Counter.css';

class CounterComponent extends React.Component {

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
            React.createElement('button', {onClick:this.decrement, 'data-testid': 'decrement-btn'}, 'Decrement'),
            React.createElement('button', {onClick:this.increment, 'data-testid': 'increment-btn'}, 'Increment'))
    }
}

export default CounterComponent;
