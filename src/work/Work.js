import React, { Component } from 'react'
import { workAssets } from './WorkAssets'
import { WorkContainer, Icon, Title } from './Work.styles'

class Work extends Component {
    componentDidMount() {
        this.props.updateIsContactPage(false)
        this.props.updateIsAboutPage(false)
        this.props.updateIsCV(false)
    }


    render() {
        return(
            <WorkContainer>
                {Object.values(workAssets).map((work, index) => {
                    return(
                        <div>
                            <a href={work.link}><Icon key={index} src={work.icon} alt='project icons'/></a>
                            <Title>{work.title}</Title>
                        </div>
                    )
                })}
            </WorkContainer>
        )
    }
}

export default Work