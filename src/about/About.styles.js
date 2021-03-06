import styled from 'styled-components'

export const AboutContainer = styled.div`
    @media (max-width: 700px){
        flex-direction: column;
        margin: 0 4%;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 65vh;
`

export const Avatar = styled.img`
    min-width: 200px;
    max-width: 300px;
    width: 40vw;
    padding-right: 3vw;
`
export const Text = styled.div`
    @media (max-width: 700px){
        font-size: 20px;
    }
    max-width: 400px;
    font-size: 25px;
`

export const FilmLink = styled.a`
    text-decoration: none;
    color: rgb(90,170,90);
    font-weight: 700;
    &:hover{
        color: rgb(30, 30, 30);
    }
`