import styled from 'styled-components';
import { ColorsGlobal as color } from '../../styles/Colors'

export const MovieTrailersContainer = styled.div`
top: 0;
left: 0;
height: 100%;
width: 100%;
position:fixed;
background: rgba(0,0,0, 0.8);
z-index: 100;
`

export const CloseButtonContainer = styled.button`
font-size: 2.2rem;
  color: ${color.white};
  width: 35px;
  position: absolute;
  display:flex;
  justify-content:space-around;
  margin-top: -0.3em;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  outline: none;
  border: none;
  cursor: pointer;
  background: ${color.darkGray};
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;
  z-index: 10;

  @media screen and (min-width: 1024px) {
    &:hover {
      background: ${color.lightBlue};
    }
  }
` 

export const MovieTrailersContent = styled.section`
position:absolute;
top: 30vh;
left: 25vw;

iframe {
    width: 50vw;
    height: 50vh;
}
`