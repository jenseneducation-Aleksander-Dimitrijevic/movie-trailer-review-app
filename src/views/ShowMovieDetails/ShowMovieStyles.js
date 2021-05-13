import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";
export default styled.div`
  padding: 110.5px 0 0;

  .backdrop-container {
    width: 100%;
    height: 300px;
    background: no-repeat center center/cover;
    display: flex;
    position: relative;
    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      background: rgba(20, 33, 44, 0.4);
      box-shadow: inset 0px -250px 200px -10px rgba(20, 33, 44, 0.99);
    }

    @media screen and (min-width: 768px) {
      height: 450px;
      align-items: center;
      background-position: top center;
    }

    .content {
      display: flex;
      width: 100%;
      margin: auto;
      padding: 15rem 0 0;
      position: relative;

      &-image {
        display: none;
      }
      @media screen and (min-width: 768px) {
        margin: 0;
        &-image {
          flex: 0 0 240px;
          height: 400px;
          border-radius: 5px;
          background: no-repeat center center/cover;
          display: block;
          box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
        }
        padding: 15rem 2rem 4rem 4rem;
      }

      .movie-details {
        padding: 0 1rem;

        @media screen and (min-width: 768px) {
          display: flex;
          flex-direction: column;
          margin: 0 1rem;

          &-rating {
            margin: auto 0 0;
          }

          &-overview {
            max-width: 90%;
          }
        }
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

          @media screen and (min-width: 768px) {
            font-size: 2.2rem;
            letter-spacing: 0.05em;
          }
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
    }
  }
`;
