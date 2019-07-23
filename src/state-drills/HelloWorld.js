import React from "react"

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'World',
        }
    }
}
handleButtonClick(who) {
    this.setState({who:who})
}

render() {
    return (
        <div>
            {this.state.who}
            <button onClick = {('Friend') => this.handleButtonClick()}>Friend</button>
        </div>
    )
}

export default HelloWorld