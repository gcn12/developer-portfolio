import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const EmailInput = styled.input`
    max-width: 200px;
    height: 50px;
    color: black;
    font-size: 20px;
`

export const EmailTextarea = styled.textarea`
    max-width: 200px;
    height: 50px;
`

export const EmailButton = styled.button`
    max-width: 200px;
    border: none;
    &:hover{
        background-color: green;
    }
`