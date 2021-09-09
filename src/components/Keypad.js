// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
    handleKeyUp = () => {
        console.log("Entering password...")
    }
    render() {
        return(
            <div>
                <input type="password" name="keypad" value="" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}

export default Keypad
