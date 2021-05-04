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
z-index:-1;
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
    padding-bottom: .2em;
}
h2{
    font-size:24px;
    font-weight: uppercase;
    padding-bottom: .5em;
}
p{
    font-size:16px;
    font-weight:bold;
    padding-bottom: 2em;
}

`

export const Cloud = styled.div`
    margin-top: 3em;
    height: 2rem;
    width: 100%;
    top: 12rem;
    color:white;
    position: absolute;
    background-image: url(${img});
    background-position: left;
    background-repeat: no-repeat;
    animation: 25s ${slideRight} infinite; 
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