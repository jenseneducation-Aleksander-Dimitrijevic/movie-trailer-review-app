import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export default styled.div`
  padding: 110.5px 0 0;

  .show-movie {
    width: 100%;
    height: 300px;
    background: no-repeat top center/cover;
    box-shadow: inset 0px -250px 250px -10px rgba(20, 33, 44, 0.99);
    position: relative;
    display: flex;

    @media screen and (min-width: 768px) {
      height: 500px;
      box-shadow: inset 0px -350px 200px -10px rgba(20, 33, 44, 0.99);
    }

    @media screen and (min-width: 1440px) {
      height: 600px;
    }

    &::before {
      width: 100%;
      height: 100%;
      background: rgba(20, 33, 44, 0.3);
      content: "";
      top: 0;
      left: 0;
      position: absolute;
    }

    &-backdrop {
      display: none;
      height: 350px;
      flex: 0 0 220px;
      border-radius: 5px;
      background: no-repeat center center/cover;
      box-shadow: 0 0 15px 5px rgba(20, 33, 44, 0.6);

      @media screen and (min-width: 768px) {
        display: block;
      }
    }

    &-content {
      align-self: flex-end;
      margin: -8rem 0;
      width: 100%;
      position: relative;
      color: ${color.white};

      .movie-details {
        align-self: flex-end;
      }

      @media screen and (min-width: 768px) {
        display: flex;
        margin: auto;
        padding: 0 2rem;
      }

      .movie-details {
        padding: 0 1rem;

        @media screen and (min-width: 768px) {
          padding: 0 2rem;
        }

        &-rating {
          display: flex;

          &-star {
            color: yellow;
            margin: 0 5px 0 0;
          }

          &-number {
            color: ${color.lightBlue};
            font-size: 12px;
            font-weight: 600;
            align-self: flex-end;
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
