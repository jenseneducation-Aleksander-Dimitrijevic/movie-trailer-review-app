import styled from "styled-components";

import { ColorsGlobal as color } from "../../styles/Colors";


export const AboutContainer = styled.div`
    display:flex;
    width:100%;
    color:${color.white}
    .content{
    margin-top:118px;
    display:flex;
    flex-direction:column;
    padding:2em;
    width:100%;
    height:auto;
    font-weight:bold;
    h1{
        padding:.5em 0;
        font-size:32px;
        text-transform:uppercase;
    }
    h3{
        text-transform:uppercase;
        font-size:20px;
        padding: 2em 0;
    }
    ul{
        padding: 1em 2em;
    }
    li{
        color: ${color.lightBlue};
        padding:.2em 0;
       
    }
    
}
`
export const Cards = styled.div`
    padding: 2em 0;
    display:flex;
    flex-direction: column;
    width:100%;
    align-items:left;
    @media screen and (min-width: 768px){
        width:100%;
        flex-direction: row;
        justify-content:space-between;
}
`
export const CreatorCard = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    transition: transform 1s;
    transform-style: preserve-3d;
    padding-top: 1em;

    @media screen and (min-width: 768px){
        align-items:center;
        flex-direction: column;
    &:hover{
        transform: rotateY(360deg);
    }
    }

    h4{
        font-size:12px;
    
        padding: 0 1em;
        @media screen and (min-width: 768px){
            margin:auto;  
        }
        
    }
    a{  
        font-size:12px;
        cursor: pointer;
        color:${color.lightBlue};
        text-decoration:none;
        padding: 0 1em;
        &:hover{
            opacity: 0.5;
            color:${color.white};
            text-decoration:underline;
            
        }
    }
    img{
        width:6em;
        border-radius:50%;
        z-index:-1;

    }

    `
    export const Box = styled.div`
        display:flex;
        padding:.1em 0;
        flex-direction:column;
        align-content:center;
    `