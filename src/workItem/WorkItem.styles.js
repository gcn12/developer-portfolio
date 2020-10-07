import styled from 'styled-components'

export const Title = styled.div`
    @media (min-width: 820px){
        font-size: 30px;
    }
    @media (max-width: 820px){
        font-size: 25px;
    }
    @media (max-width: 600px){
        font-size: 20px;
    }
    @media (max-width: 400px){
        font-size: 12px;
    }
    text-transform: uppercase;
    align-self: center;
    padding-bottom: 25px;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Image = styled.img`
    align-self: center;
    width: 100%; 
    padding: 20px 0;
`

export const ImageMobile = styled.img`
    align-self: center;
    width: 50%; 
    padding: 20px 0;
`

export const Link = styled.div`
    font-size: 25px;
    display: flex;
`