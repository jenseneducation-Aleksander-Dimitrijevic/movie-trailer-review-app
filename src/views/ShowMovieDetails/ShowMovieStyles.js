import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";
export default styled.div`
  padding: 110.5px 0 0;

  .backdrop-container {
    box-shadow: inset 0px 0px 50px 5px ${color.deepBlue};
  }

  .backdrop-image {
    display: block;
    width: 100%;
    filter: grayscale(25%);
    opacity: 0.2;
    z-index: -1;
    position: relative;
  }

  .movie-details {
    padding: 0 1rem;
    &-rating {
      display: flex;
      align-items: center;
      padding: 5px 0 0;

      &-star {
        color: yellow;
        margin: 0 5px 0 0;
      }

      &-number {
        color: ${color.lightBlue};
        font-size: 14px;
        font-weight: 600;
      }
    }
    &-title {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 800;
      color: ${color.white};
      letter-spacing: 0.03em;
      margin: 5px 0;
    }
  }
`;
