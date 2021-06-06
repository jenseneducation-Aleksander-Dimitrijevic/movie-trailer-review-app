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
    h4{
        padding:.2em.0%;
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
padding: 2em 1em;
display:flex;
width:100%;
flex-direction:row;
justify-content:space-between;
margin:auto;
`
export const CreatorCard = styled.div`
display: flex;
flex-direction:column;
align-items:center;
transition: transform 1s;
transform-style: preserve-3d;
&:hover{
    transform: rotateY(360deg);
}

h4,a{
    font-size:12px;
    color:${color.lightBlue};
    margin:auto; 
    
}
a{
    cursor: pointer;
    text-decoration:none;
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