import styled from 'styled-components'

export const WorkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1100px) {
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
        width: 40vw;
        height: 40vw;
        min-height: 300px;
        min-width: 300px;
    }
`

export const Title = styled.div`
    font-size: 20px;
    padding-bottom: 20px;
`