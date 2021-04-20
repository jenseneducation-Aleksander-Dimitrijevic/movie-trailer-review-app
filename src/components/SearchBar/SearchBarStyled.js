import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const SearchBarContainer = styled.div`
  .input-small {
    height: 55px;
    width: 100vw;
    background: ${color.darkBlue};
    border: none;
    outline: none;
    transition: all 0.4s ease-in-out;
  }

  .input-big {
    height: 400px;
    width: 100vw;
    background: ${color.darkBlue};
    border: none;
    outline: none;
    transition: all 0.4s ease-in-out;
  }

  .showButton {
    position: absolute;
    right: 18em;
    top: 1em;
    height: 25px;
    width: 65px;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    outline: none;
    border: none;
    color: ${color.white};
    background: ${color.orange};
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    margin-right: 8px;

    &:hover {
      opacity: 0.8;
    }
  }

  .hideButton {
    display: none;
  }
`;

export const SearchInputContainer = styled.div`
  section {
    h1 {
      color: red;
    }
  }
`;
