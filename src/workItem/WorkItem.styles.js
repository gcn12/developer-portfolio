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

export const TopImage = styled.img`
    align-self: center;
    width: 130%; 
    padding: 20px 0;
    @media (max-width: 820px) {
        width: 130%;
    }
`

export const Image = styled.img`
    align-self: center;
    width: 100%; 
    padding: 20px 0;
    @media (max-width: 820px) {
        width: 130%;
    }
`

export const ImageMobile = styled.img`
    align-self: center;
    width: 50%; 
    padding: 20px 0;
    @media (max-width: 820px) {
        width: 100%;
    }
`

export const Link = styled.div`
    @media (max-width: 820px){
        font-size: 18px;
    }
    @media (max-width: 550px){
        font-size: 14px;
    }
    font-size: 25px;
    display: flex;
    `

export const URL = styled.a`
    padding-left: 10px;
    text-decoration: none;
    color: rgb(90,170,90);
    font-weight: 700;
    &:hover{
        color: rgb(30, 30, 30);
    }
`

export const LinkButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const LinkButton = styled.button`
    margin-left: 15px;
    background-color: rgb(25, 25, 25);
    color: white;
    border: none;
    width: 170px;
    height: 80px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: rgb(70, 70, 70)
    }
    text-transform: uppercase;
`