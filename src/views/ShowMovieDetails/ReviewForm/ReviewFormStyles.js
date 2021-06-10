import styled from "styled-components";
import { ColorsGlobal as color } from "../../../styles/Colors";
export default styled.form`
  margin: 10rem 0 2rem;
  padding: 1rem;
  background: ${color.darkBlue};
  color: ${color.white};
  width: 100%;

  @media screen and (min-width: 768px) {
    border-radius: 5px;
    margin: 0 0 2rem 2rem;
    max-width: 80%;
  }

  h1.review-form-title {
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: 0.03em;
  }

  .review-form-input {
    background: ${color.darkGray};
    border: none;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    width: 100%;
    margin: 1rem 0;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: ${color.white};
    font-family: "Montserrat", sans-serif;
    &::placeholder {
      color: ${color.lightBlue};
    }
  }
`;
