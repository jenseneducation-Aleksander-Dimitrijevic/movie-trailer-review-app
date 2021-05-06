import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";



export const TopRatedContainer = styled.div`
  max-width: 800px;
  margin:auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  .carousel {
    &:active {
      cursor: grabbing;
    }

    &.carousel-slider {
      .control-arrow {
        width: 40px;
        height: 40px;
        top: 50%;
        transform: translateY(-50%);
        background: ${color.darkGray};
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        padding: 0;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
        &::before {
          margin: 0;
        }
      }
    }
  }
`;



export const TopRatedData = styled.section`
  text-align: left;
  

  img {
    width: 400px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  aside {
    height: 90px;
    margin-top: -0.3em;
    background: ${color.darkBlue};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    .title-text {
      color: ${color.white};
      padding-left: 2em;
      padding-top: 1.4em;
    }

    .release-text {
      color: ${color.grayBlue};
      padding-left: 2em;
    }

    .rating-text {
      padding-left: 2em;
      color: ${color.grayBlue};
    }
  }
`;

export const HiddenInfo = styled.section``;
