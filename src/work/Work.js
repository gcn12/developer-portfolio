import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { workAssets } from './WorkAssets'
import { 
    WorkContainer, 
    Icon, 
    Title, 
    // Container 
} from './Work.styles'

class Work extends Component {
    componentDidMount() {
        this.props.updateIsContactPage(false)
        this.props.updateIsAboutPage(false)
        this.props.updateIsCV(false)
    }


    render() {
        return(
            // <Container>
                <WorkContainer>
                    {Object.values(workAssets).map((work, index) => {
                        return(
                            <div key={index}>
                                <Link to={`work/${Object.keys(workAssets)[index]}`}><Icon key={index} src={work.icon} alt='project icons'/></Link>
                                <Title>{work.title}</Title>
                            </div>
                        )
                    })}
                </WorkContainer>
            // </Container>
        )
    }
}

export default Work