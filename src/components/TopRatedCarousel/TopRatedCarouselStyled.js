import styled from 'styled-components';
import { ColorsGlobal as color } from '../../styles/Colors'

export const TopRatedCarouselContainer = styled.div`
  max-width: 800px;
  margin:auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  .carousel {
    display:none;

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


`
