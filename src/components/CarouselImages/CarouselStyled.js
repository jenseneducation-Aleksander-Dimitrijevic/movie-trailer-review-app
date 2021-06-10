import styled from 'styled-components';
import { ColorsGlobal as color } from '../../styles/Colors'

export const CarouselContainer = styled.div`
position:absolute;
top:0;
left:0;
right: 0;
z-index: -1;
clip-path: inset(0 0 65% 0);
box-shadow: inset 0px -39px 36px -21px ${color.deepBlue};

@media screen and (max-width: 768px){
    clip-path: inset(0 0 40% 0);
}

.carousel {
    &:active {
      cursor: grabbing;
    }

    &.carousel-slider {
      .control-arrow {
        display:none;
      }
    }
  }
`

export const Img = styled.img`
object-fit: cover;
opacity: 0.2;


`