import styled from "styled-components";
import { ColorsGlobal as color } from "../../../styles/Colors";
export default styled.form`
  padding: 1.5rem 2rem 2.5rem;
  margin: 20rem 0 1rem;
  background: ${color.darkBlue};
  color: ${color.white};
  width: 100%;

  @media screen and (min-width: 450px) {
    margin: 12rem 0 2rem;
  }

  @media screen and (min-width: 768px) {
    margin: 10rem 0 2rem 4rem;
    width: 70%;
    border-radius: 5px;
  }

  h1.review-form-title {
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: 0.03em;
    margin: 0 0 1rem;
  }

  .review-form-input {
    background: ${color.darkGray};
    border: none;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    width: 90%;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    &::placeholder {
      color: ${color.lightBlue};
    }
  }
`;
