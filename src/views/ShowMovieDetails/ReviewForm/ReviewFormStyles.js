import styled from "styled-components";
import { ColorsGlobal as color } from "../../../styles/Colors";
export default styled.form`
  padding: 1rem;
  background: ${color.darkBlue};
  color: ${color.white};
  width: 100%;

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
