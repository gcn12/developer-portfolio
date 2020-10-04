import React from 'react'
import errorImage from './16.png'
import { Image, ErrorContainer } from './Error.styles'

const Error = () => {
    return(
        <ErrorContainer>
            <Image alt="404" src={errorImage}></Image>
        </ErrorContainer>
    )
}

export default Error