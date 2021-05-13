import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";
export default styled.div`
  padding: 110.5px 0 0;

  .backdrop-container {
    box-shadow: inset 0px -39px 36px -21px ${color.deepBlue};
  }

  .backdrop-image {
    display: block;
    width: 100%;
    filter: grayscale(15%);
    opacity: 0.4;
    z-index: -1;
    position: relative;
  }

  .movie-details {
    padding: 0 1rem;
    margin: -3rem 0 0;
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
      margin: 8px 0;
    }

    &-release {
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.03em;
      color: ${color.white};
      margin: 6px 0;
      display: block;
    }

    &-overview {
      color: ${color.lightBlue};
      letter-spacing: 0.03em;
      line-height: 1.7;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;
