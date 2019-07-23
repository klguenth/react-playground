import React from "react"

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'World'
        }
    }

    handleButtonClick(who) {
        this.setState({who:who})
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.who}</h1>
                <button onClick = {() => this.handleButtonClick('Friend')}>Friend</button>
                <button onClick = {() => this.handleButtonClick('World')}>World</button>
                <button onClick = {() => this.handleButtonClick('React')}>React</button>
            </div>
        )
    }
}
export default HelloWorld