import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";
import { SeeTrailerButton } from '../TopRatedBigPictures/TopRatedBigPicturesStyled'


export const TopRatedContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
gap:1rem;

  @media screen and (max-width: 768px) {
    display:flex;
    width: 90vw;
    overflow: auto;
  }
`;



export const TopRatedData = styled.section`
  display:grid;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {

    display: none;
  } 


  img {
    max-width: 401.5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 0 rgba(0,0,0,0.23);

    /* @media screen and (max-width: 768px) {
      width: 150px; */
    }
 


  aside {
    height: 180px;
    background: ${color.darkBlue};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    max-width: 401.5px;
    box-shadow: 0 0 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

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

    @media screen and (max-width: 768px) {
      height: 85px;
      margin-top: -1em;


      .title-text, .release-text, .rating-text {
        padding-left: 1em;
      }
    }
  }
`;

export const HiddenInfo = styled.section`
`;


export const SeeTrailerButtonContainer = styled.div`
display:flex;
margin-top: 0.5em;
justify-content:flex-end;
`

export const SeeTrailerButtons = styled(SeeTrailerButton)`
position:unset;
background: ${color.darkBlue};
color: ${color.grayBlue};
border-radius: 5px;
height: 25px;
width: 65px;
font-weight:bold;
transition: all 0.4s ease-in-out;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

span {
  justify-content:center;
  background: unset;
  width: unset;
  padding:unset;
  .play-icon {
    display:none;
  }
} 

&:hover {
  opacity: 0.7;
}

@media screen and (max-width: 768px){
  display:none;
}
`