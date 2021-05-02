import styled from 'styled-components';
import { ColorsGlobal as color } from '../../styles/Colors'

export const CarouselContainer = styled.div`
position:absolute;
top:0;
left:0;
z-index: -1;
clip-path: inset(0 0 65% 0);
`

export const Img = styled.img`
object-fit: cover;
opacity: 0.3;


`