import styled from 'styled-components';
import { ColorsGlobal as color } from '../../styles/Colors'

export const MoviesContainer = styled.div`
height: 100%;
padding-top: 25em;
padding-bottom: 2em;

@media screen and (max-width: 768px) {
    padding-top:5em;
    .container{
        padding-bottom: 12em;
    }
}
`

export const HeaderMovies = styled.section`
padding: 12em 2.5em;

@media screen and (max-width: 768px) {
    padding:5em 1em;
}

h1 {
color: ${color.white};
font-size:2.5rem;
text-transform: uppercase;

@media screen and (max-width: 768px) {
    font-size: 1.7rem;
}

}

p {
color: ${color.grayBlue};
font-weight: bold;
font-size: 1rem;
letter-spacing: 0.3px;
width: 80%;

@media screen and (max-width: 768px) {
    width: 100%;
}

}
`