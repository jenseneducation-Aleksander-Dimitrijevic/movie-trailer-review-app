import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";



// export const TopRatedContainer = styled.div`
// display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: repeat(4, 1fr);
//   grid-column-gap: 1em;
//   grid-row-gap: 1em;
// `;



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
