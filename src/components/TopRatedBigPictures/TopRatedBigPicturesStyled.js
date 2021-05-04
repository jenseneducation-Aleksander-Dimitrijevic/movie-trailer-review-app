import styled from 'styled-components';
import { ColorsGlobla as color } from '../../styles/Colors'

export const TopRatedBigPicturesContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
grid-column-gap: 1em;
grid-row-gap: 1em;
`;

export const TopRatedBigPicturesContent = styled.section`
margin-top:10em;

img {
    width: 400px;
}
`