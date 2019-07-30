import React from "react"

class Accordion extends React.Component {
    static defaultProps = { 
        sections: []    
    };
    state = {
        currentTabIndex: null
    };
    handleButtonClick = (index) => {
        this.setState({ currentTabIndex: index })
    };
    
    renderButtons() {
    const buttons = this.props.sections.map((section, index) => (
        <li key={index}>
            <button onClick={() =>this.handleButtonClick(index)}>
                {section.title}
            </button>
            {(this.state.currentTabIndex === index) && <p>{section.content}</p>}
        </li>
    ))
    return buttons
    }

    render() {
        return (
            <ul>
                {this.renderButtons()}
            </ul>
        )
    }
}

export default Accordion