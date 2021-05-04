import styled, { keyframes } from 'styled-components';
import img from '../../assets/svg/cloud.svg';
import imgBottom from '../../assets/svg/404bottom.svg';

const slideRight = keyframes`
0% { left: 0;}
50%{ left : 100%;}
100%{ left: 0;}
`

export const NotFoundContainer = styled.div`
padding-top: 10em;
width: 100%;
height:100vh;
background-image:url('./././assets/svg/cloud.svg');
text-align:center;
justify-content:center;
font-size:42px;
color:white;
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

z-index: 4;
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

z-index: 4;
    height: 10rem;
    width:100%;
    bottom: 0;
    color:white;
    position: absolute;
    background-size:cover;
    /* background-position: center center; */
    background-repeat: no-repeat;
`