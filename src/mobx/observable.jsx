import React, { Component } from 'react';
import { observable } from 'mobx';

class Counter extends Component {
    @observable count = 0
    render() {
        return (
            <div>
                Counter: {this.count}<br/>
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        )
    }

    handleInc = () => {
        this.count++;
    }

    handleDec = () => {
        this.count--;
    }
}

export default Counter;