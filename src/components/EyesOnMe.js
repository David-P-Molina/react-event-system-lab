// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {1
    handleOnBlur = () => {
        console.log("Hey! Eyes on me!")
    }
    handleOnFocus = () => {
        console.log("Good!")
    }
    render() {
        return (
            <div>
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>Button</button>
            </div>
        )
    }
}

export default EyesOnMe