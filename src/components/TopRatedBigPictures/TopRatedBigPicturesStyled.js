import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const HeaderBigPictures = styled.h1`
  text-transform: uppercase;
  color: ${color.white};
  text-align: left;
  font-size: 1.8rem;
  padding-bottom: 0.3em;
  margin-top: 10em;
  span {
    color: ${color.orange};
  }

  @media screen and (max-width:768px) {
    margin-top: 2em;
    font-size: 1.3rem;
  } 
`;


export const TopRatedBigPicturesContainer = styled.div`
  display: flex;
  @media screen and (max-width: 748px) {
    overflow:scroll hidden;
    width: 90vw;
    border-radius: 10px;

  }
`;

export const ImagesToprated = styled.img`
  max-width: 820px;
  border-radius: 5px;
  margin-right: 0.5em;

  @media screen and (max-width: 768px) {
    width: 400px;
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
      display:none;

      
    }
  }
`;
