import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";



export const TopRatedContainer = styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;

  @media screen and (max-width: 768px) {
    display:flex;
    width: 90vw;
    overflow: auto;
  }
`;



export const TopRatedData = styled.section`
  text-align: left;
  
  img {
    width: 400px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    @media screen and (max-width: 768px) {
      width: 150px;
    }
  }

.hide-img-smaller {
  @media screen and (max-width: 768px) {
    display:none;
  }
}

.hide-img-bigger {
  visibility:hidden;
}

@media screen and (max-width:768px) {
  .hide-img-bigger {
    visibility: visible;
  }
}


  aside {
    height: 90px;
    background: ${color.darkBlue};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: -38em;

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

export const HiddenInfo = styled.section``;
