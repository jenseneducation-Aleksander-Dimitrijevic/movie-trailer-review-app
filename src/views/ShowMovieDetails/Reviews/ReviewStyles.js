import styled from "styled-components";
import { ColorsGlobal as color } from "../../../styles/Colors";
export default styled.article`
  .review {
    background-color: ${color.darkBlue};
    color: ${color.white};
    width: 100%;
    padding: 1rem;
    margin: 0 0 10px;
    display: flex;
    align-items: center;

    &-thumbnail {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    &-content {
      margin: 0 0 0 10px;
    }

    &-title {
      font-size: 16px;
    }

    &-text {
      font-size: 14px;
      font-style: italic;
    }
  }

  @media screen and (min-width: 768px) {
    border-radius: 5px;
    margin: 0 0 2rem 2rem;
    max-width: 80%;
  }
`;
