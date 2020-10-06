import styled from 'styled-components'

export const LogoTitle = styled.div`
    @media (max-width: 700px) {
        font-size: 40px;
    }
    @media (max-width: 360px) {
        font-size: 30px;
    }
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
    font-weight: 500;
`

export const Options = styled.div`
    font-size: 20px;
    color: rgb(30,30,30);
    margin: 15px;
`

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const UL = styled.ul`
    padding: 0;
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