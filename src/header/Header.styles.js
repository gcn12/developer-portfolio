import styled from 'styled-components'

export const LogoTitle = styled.div`
    font-size: 50px;
    color: rgb(30,30,30);
    text-decoration: none;
    &:hover {
        color: rgb(120,120,120)
    }
`

export const LogoSubtitle= styled.div`
    @media (max-width: 700px){
        display: none;
    }
    font-size: 20px;
`

export const Options = styled.div`
    font-size: 20px;
    color: rgb(30,30,30);
`

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const UnderlineStatic = styled.div`
    display: inline-block;
    padding: 10px 3px 0px 3px;
    position: relative;

    &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 1px;
        left: 50%;
        position: absolute;
        background: rgb(30,30,30);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
        width: 100%; 
        left: 0; 
    }
`