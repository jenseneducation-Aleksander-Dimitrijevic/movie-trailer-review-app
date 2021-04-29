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
    color: ${color.gray};
    font-size: 3.3rem;
    text-transform: uppercase;
    span {
        display:block;
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
`