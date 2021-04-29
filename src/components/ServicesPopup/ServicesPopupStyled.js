import styled, { keyframes } from 'styled-components';
import { IconsContainer, Icons } from '../Services/ServicesStyled';

const slideUp = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
  }
  to {0
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

`;


export const ServicesPopUpContainer = styled.div`
top:0;
left: 0;
height: 100%;
width: 100%;
position:fixed;
z-index:6;
background: rgba(0, 0, 0, 0.6);

.servicescontent {
    width: 100%;
    position:absolute;
    max-width: 380px;
    cursor: default;
    z-index:7;

    &.show {
      animation: 0.3s ${slideUp} ease-in-out;
    }
}

&.show {
    opacity: 1;
    visibility: visible;
  }





`

export const ServicesContentContainer = styled.section`
   border:1px solid gainsboro;
   


`


export const ServicesIconsContainer = styled(IconsContainer)`
display:flex;
`

export const ServicesIcons = styled(Icons)``

export const ServicesName = styled.h1`

`