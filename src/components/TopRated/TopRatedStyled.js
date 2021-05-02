import styled from 'styled-components';
import { ColorsGlobal as color } from '../../styles/Colors'

export const TopRatedContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 1em;
grid-row-gap: 1em;
`
export const TopRatedHeader = styled.h1`
margin-top:10em;
text-align:left;
font-size: 1.5rem;
margin-left: -5em;
color: ${color.white};
text-transform: uppercase;
`

export const TopRatedData = styled.section`


img {    

margin-top: 20em;       
width: 200px;
}
`

