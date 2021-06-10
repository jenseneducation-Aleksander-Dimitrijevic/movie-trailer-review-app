import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const ShowcaseContainer = styled.div`
  text-align: center;
  width: 70%;
  margin:auto;
  height: 50vh;

  .header {
    padding: 3rem 10px 0;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    &-title {
      font-size: 1.4rem;
      color: ${color.white};
    }
    &-sub-title {
      font-size: 12px;
      color: ${color.lightBlue};
      padding: 5px 0 10px;
    }
  }

  .carousel {
    margin: -0.5rem 0;
    padding: 0 20px;
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

  .label {
    color: ${color.white};
    font-size: 14px;
    padding: 30px 0 0;
    width: 90%;
    text-align: center;
    margin: auto;
    font-weight: 700;
  }
`;
