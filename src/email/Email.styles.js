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
    width: 55vw;
    min-width: 200px;
    height: 50px;
    color: rgb(80, 80, 80);
    font-size: 20px;
    border: none;
    border-radius: 5px;
`

export const EmailTextarea = styled.textarea`
    color: rgb(80, 80, 80);
    min-width: 200px;
    width: 55vw;
    height: 140px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
`

export const EmailButton = styled.button`
    max-width: 150px;
    height: 50px;
    font-size: 20px;
    color: white;
    border: none;
    background-color: rgb(10,10,10);
    &:hover{
        background-color: rgb(50,50,50);
    }
`

export const ErrorMessage = styled.div`
    font-size: 20px;
    color: red;
`