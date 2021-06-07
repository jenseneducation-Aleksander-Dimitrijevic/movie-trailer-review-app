import styled, { keyframes } from 'styled-components';
import img from '../../assets/svg/cloud.svg';
import imgBottom from '../../assets/svg/404bottom.svg';

const slideRight = keyframes`
0% { left: 0;}
50%{ left : 100%;}
100%{ left: 0;}
`

export const NotFoundContainer = styled.div`
display:flex;
width: 100%;
max-width:100%;
position:relative;
overflow-x:hidden;
height:100vh;
text-align:center;
justify-content:center;
font-size:42px;
color:white;
.content{
   margin:auto;
}
h1{
    font-size: 80px;
    font-weight: uppercase;
    padding-bottom: .1.5em;
}
h2{
    font-size:24px;
    font-weight: uppercase;
    padding-bottom: 1em;
}
p{
    font-size:16px;
    font-weight:bold;
    padding-bottom: .5em;
}

`

export const Cloud = styled.div`
    margin-top: 2rem;
    top:118.5px;
    height: 2rem;
    width: 100%;
    color:white;
    position: absolute;
    background-image: url(${img});
    background-position: left;
    background-repeat: no-repeat;
    animation: 180s ${slideRight} linear infinite ; 
`

export const Mandown = styled.div `
background-image: url(${imgBottom});
    z-index: 1;
    height: 10rem;
    width:100%;
    max-width:100%;
    bottom: 0;
    position: absolute;
    background-size:cover;
    background-repeat: no-repeat;
`
export const DivLink = styled.div`
color:white;
display: flex;
justify-content:space-between;
font-size: 16px;
cursor: pointer;
padding-top:1em;
z-index:1;
a{
text-decoration:none;
font-weight:bold;    
background: transparent;
border-radius: 5px;
border: 1px solid #2a3f55;
box-shadow: none;
color: #bed0de;
font-size: 0.8rem;
padding: 0.5rem 0.65rem;
&:hover{
    background: rgba(87, 109, 132, 0.6);
    border: 1px solid #576d84;
    transition: background-color 100ms linear 0ms;
    
}
}

`