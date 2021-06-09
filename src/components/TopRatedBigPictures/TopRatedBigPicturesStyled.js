import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const HeaderBigPictures = styled.h1`
  text-transform: uppercase;
  color: ${color.white};
  text-align: center;
  font-size: 1.8rem;
  padding-bottom: 0.3em;
  margin-top: 10em;
  span {
    color: ${color.orange};
  }

  @media screen and (max-width: 768px) {
    margin-top: 2em;
    font-size: 1.3rem;
  }
`;

export const TopRatedBigPicturesContainer = styled.div`
  display: flex;
  
  @media screen and (max-width: 748px) {
    overflow: scroll hidden;
    width: 90vw;
    border-radius: 10px;
  }
`;

export const SeeTrailerButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
  background: transparent;
  outline: none;
  border: none;
  color: ${color.white};
  z-index: 1;
  position: absolute;
  cursor: pointer;
  span {
    display: flex;
    text-align: center;
    align-items: center;
    width: 61.5em;
    padding: 1em;
    .play-icon {
      font-size: 1.7rem;
    }
  }

  @media screen and (max-width: 768px) {
    display:none;
  }
`;

export const ImagesToprated = styled.img`
  max-width: 1000px;
  border-radius: 5px;
  margin-right: 0.5em;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media screen and (max-width: 768px) {
    max-width: 340px;
    margin:auto;
  }
`;

export const TopRatedBigPicturesContent = styled.section`
  aside {
    background: transparent;
    position: relative;
    bottom: 6em;
    padding-left: 1em;
    padding-right: 2em;
    text-align: start;

    .title-text {
      color: ${color.white};
      font-size: 1.2rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;

      span {
        font-size: 0.9rem;
      }
    }

    .release-text {
      color: ${color.white};
    }

    .overview-text {
      color: ${color.white};
      font-size: 0.75rem;
      letter-spacing: 0.08em;

      span {
        letter-spacing: unset;
        &::after {
          content: "- ";
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .overview-text {
      display: none;
    }

    .title-text{
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;
