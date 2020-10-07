import styled from 'styled-components'

export const WorkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 700px) {
        justify-content: center;
    }
    @media (min-width: 1100px) {
        padding-top: 50px;
    }
`

export const Icon = styled.img`
    @media(min-width: 1100px){
        width: 20vw;
        height: 20vw;
    }
    @media(max-width: 1100px){
        width: 30vw;
        height: 30vw;
        min-height: 200px;
        min-width: 200px;
    }
    @media(max-width: 700px){
        width: 70vw;
        height: 70vw;
        min-height: 310px;
        min-width: 310px;
    }
`

export const Title = styled.div`
    @media (min-width: 700px){
        font-size: 17px;
    }
    font-size: 20px;
    padding-bottom: 20px;
`