import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-decoration: none;
`
    
export const LogoContainer = styled.div`


`

export const LogoTitle = styled.div`
    font-size: 50px;
    color: rgb(30,30,30);
    text-decoration: none;
`

export const LogoSubtitle= styled.div`
    font-size: 20px;
`

export const OptionsContainer = styled.div`
    display: flex;
`

export const Options = styled.div`
    font-size: 20px;
    margin: 0px 8px;
    color: rgb(30,30,30);
`

export const Underline = styled.div`
    // &:after {
    //     background: none repeat scroll 0 0 transparent;
    //     bottom: 0;
    //     content: "";
    //     display: block;
    //     height: 1px;
    //     // left: 50%;
    //     // position: absolute;
    //     background: rgb(30,30,30);
    //     transition: width 0.3s ease 0s, left 0.3s ease 0s;
    //     width: 0;
    //     width: 100%; 
    //     left: 0; 
    // }



    display: inline-block;
    padding: 10px 2px;
    position: relative;

    &:after {
        background: none repeat scroll 0 0 transparent;
        // bottom: 0;
        content: "";
        display: block;
        height: 1px;
        left: 50%;
        position: absolute;
        background: rgb(30,30,30);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    &:hover:after {
        width: 100%; 
        left: 0; 
    }
`