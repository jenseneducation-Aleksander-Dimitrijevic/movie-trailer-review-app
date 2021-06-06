import styled from 'styled-components';
import { ColorsGlobal as color } from '../../styles/Colors'

export const HeaderLandingPageContainer = styled.div`


h5 {
    color: ${color.skyBlue};
    text-transform:uppercase;
    font-size: 1.4rem;
    margin-bottom: 0.5em;
}

h1 {
    color: ${color.white};
    font-size: 3.3rem;
    text-transform: uppercase;
    span {
        display:block;
    }
}

 @media screen and (max-width: 768px) {
    margin-top: 12em;

  h5, h1 {
      text-align:center;
  }

  h5 {
      font-size: 0.8rem;
  }

  h1 {
      font-size: 1.3rem;
      letter-spacing:0.02em;
    line-height: 1.5rem;
      .streaming-text {
          display:block;
      }
  }
 }

`

export const ChooseServiceButton = styled.button`
height: 50px;
width: 250px;
outline:none;
border:none;
border-radius: 5px;
text-transform:uppercase;
font-weight:bold;
color: ${color.white};
background: ${color.orange};
margin:auto;
font-size: 1.2rem;
margin-top: 1.5em;
cursor:pointer;
transition: all 0.4s ease-in-out;


:hover {
    opacity: 0.7;
}

@media screen and (max-width: 768px){
width: 90vw;
font-size: 1rem;
font-weight: bold;
margin-top: 1rem;
}
`