import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const HeaderBigPictures = styled.h1`
  text-transform: uppercase;
  color: ${color.white};
  text-align: start;
  font-size: 1.8rem;
  margin-bottom: -20em;

  span {
    color: ${color.orange};
  }
`;

export const ImagesToprated = styled.img`
  max-width: 58em;
  max-height: 28em;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;

export const TopRatedBigPicturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fill, 4fr);
  margin-top: 20em;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.3em;

  @media screen and (max-width: 748px) {
    display: flex;
  }
`;

export const TopRatedBigPicturesContent = styled.section`
  aside {
    background: transparent;
    position: relative;
    bottom: 6em;
    padding-left: 2em;
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
  }
`;
