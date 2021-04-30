import styled, { keyframes } from "styled-components";
import { IconsContainer, Icons } from "../Services/ServicesStyled";
import { ColorsGlobal as color } from "../../styles/Colors";

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
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 6;
  background: rgba(0, 0, 0, 0.6);
`;

export const CloseButtonContainers = styled.button`
  font-size: 2.2rem;
  color: ${color.white};
  width: 35px;
  position: absolute;
  margin-left: 10.3em;
  margin-top: -0.3em;
  height: 35px;
  margin-right: 2em;
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
`;

export const ServicesPopUpContent = styled.section`
  max-width: 390px;
  max-height: 50em;
  overflow-y: scroll;
  overflow-x: hidden;
  cursor: default;
  z-index: 7;
  background: ${color.deepBlue};
  animation: 0.3s ${slideUp} ease-in-out;
  margin: auto;
  margin-top: 20vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px 0px 5px;
  padding: 1em;
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
    background-color: ${color.deepBlue};
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${color.darkBlue};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${color.skyBlue};
    border: none;
  }
`;

export const TextContainer = styled.aside`
  text-align: left;
  height: 5em;
  background: ${color.darkGray};
  padding: unset;
  position: fixed;
  overflow-y: unset;
  width: 390px;
  margin-top: -1em;
  margin-left: -1em;
  border-top-left-radius: 5px;

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${color.white};
    padding-top: 1.3em;
    padding-left: 1em;
    span {
      display: block;
      text-transform: capitalize;
      color: ${color.grayBlue};
      font-size: 0.8rem;
    }
  }
`;

export const ServicesIconsContainer = styled(IconsContainer)`
  display: flex;
  padding-left: 1em;
  padding-bottom: 0.3em;
`;

export const ServicesIcons = styled(Icons)``;

export const ServicesName = styled.h1`
  font-size: 0.9rem;
  color: ${color.white};
  padding-top: 0.5em;
`;

export const SubscriberText = styled(ServicesName)`
  font-size: 0.9rem;
  font-weight: bold;
  padding-top: 6.3em;
  padding-bottom: 1em;
  padding-left: 1em;
  text-align: left;
  text-transform: uppercase;
`;
