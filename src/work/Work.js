import React, { Component } from 'react'

class Work extends Component {
    componentDidMount() {
        this.props.updateIsContactPage(false)
        this.props.updateIsAboutPage(false)
    }

    render() {
        return(
            <div className='content'>Work</div>
        )
    }
}

export default Work