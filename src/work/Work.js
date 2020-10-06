import React, { Component } from 'react'
import { WorkContainer } from './Work.styles'

class Work extends Component {
    componentDidMount() {
        this.props.updateIsContactPage(false)
        this.props.updateIsAboutPage(false)
        this.props.updateIsCV(false)
    }

    render() {
        return(
            <div>
                <WorkContainer>Work</WorkContainer>
            </div>
        )
    }
}

export default Work