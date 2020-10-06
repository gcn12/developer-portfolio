import React, { Component } from 'react'
import { Container, Resume } from './CV.styles'

class CV extends Component {

    componentDidMount(){
        this.props.updateIsCV(true)
        this.props.updateIsAboutPage(false)
        this.props.updateIsContactPage(false)
    }

    render() {
        return(
            <Container>
                <Resume title='resume' frameborder="0" scrolling="no"
                    width="640" height="480"
                    src="https://drive.google.com/file/d/1PHkCTHBZ4PZBmVsb4yQBhMh2uAvISg-L/preview">
                </Resume>
                {/* <Resume frameborder="0" width="840" src="https://docs.google.com/document/d/e/2PACX-1vSW7N72kg119R_lXiy1-v8ctIEFZlHVBTiKc_AYzMKiyOg2ryNs9WDgGTUUNrtQe3c_SBV0sMZ8_bDO/pub?embedded=true"></Resume> */}
            </Container>
        )
    }
}

export default CV