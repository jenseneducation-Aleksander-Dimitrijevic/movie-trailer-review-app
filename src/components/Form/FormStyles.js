import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 380px;
  border-radius: 5px;
  background: ${color.deepBlue};
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  transform: translateY(20px);

  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .header {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0 0;
    background: ${color.darkGray};
    color: ${color.white};
    &-title {
      text-align: center;
      color: ${color.white};
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .icons {
      margin: 1.5rem 0 0;
      &-content {
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }
      &-google {
        font-size: 60px;
        background: ${color.darkBlue};
      }
    }
  }
  .form {
    padding: 1.25rem 1.5rem;
    &-header {
      margin: 0 0 2rem;
    }
    &-title {
      color: ${color.white};
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    &-field {
      width: 100%;
      border: none;
      background: transparent;
      outline: none;
      border-bottom: 1px solid ${color.purpleGray};
      padding: 0 0 10px;
      color: ${color.white};
      transition: all 0.3s ease;
      &:nth-of-type(1) {
        margin: 0 0 2rem;
      }
      &::placeholder {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.03em;
        color: ${color.white};
      }
      &:focus {
        border-color: ${color.orange};
      }
    }
    &-submit {
      display: block;
      width: 100%;
      height: 45px;
      text-transform: uppercase;
      color: ${color.white};
      margin: 2rem 0 0;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      letter-spacing: 0.03em;
      cursor: pointer;
      border-radius: 5px;
      background: ${color.orange};
      transition: all 0.3s ease;

      @media screen and (min-width: 1024px) {
        &:hover {
          background: ${color.lightBlue};
        }
      }
    }
  }
`;
