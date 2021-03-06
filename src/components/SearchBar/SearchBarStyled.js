import styled, { keyframes } from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const SearchBarContainer = styled.div`
  .searchInput {
    height: 48.5px;
    width: 100vw;
    background: ${color.darkBlue};
    border: none;
    outline: none;
    transition: all 0.4s ease-in-out;
    padding-left: 5em;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${color.grayBlue};
    z-index: 99;

    &::placeholder {
      color: ${color.grayBlue};
      font-weight: bold;
    }
  }

  .search-icon {
    background: transparent;
    font-size: 1.3rem;
    color: ${color.grayBlue};
    position: absolute;
    left: 2em;
    top: 0.7em;

    @media screen and (max-width: 768px) {
      left: 1em;
    }
  }

  .showButton {
    position: absolute;
    right: 4em;
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

    @media screen and (max-width: 768px) {
      right: 1em;
    }
  }

  .hideButton {
    display: none;
  }
`;

const dropDownSearchBar = keyframes`
 0% {
    opacity: 0;
    transform: translateY(50px);
  }
  20% {
    opacity: 1;
    transform: translateY(0px);
  }
  85% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const SearchInputContainer = styled.div`
  .input-big {
    width: 100vw;
    animation: ${dropDownSearchBar} 2s ease-in-out;
    background: ${color.deepBlue};
    border: none;
    outline: none;
    padding: 2.5em;
    height: 50vh;
    overflow-y: scroll;
    box-shadow: -15px 20px 20px -15px #111;
    z-index: 9999;

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.8);
      background-color: ${color.deepBlue};
    }

    ::-webkit-scrollbar {
      width: 5px;
      background-color: ${color.darkBlue};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${color.skyBlue};
      border: none;
    }

    @media screen and (max-width: 768px) {
      height: 100vh;
      padding: 2em 1em;
      display: grid;
    }
  }

  .input-small {
    display: none;
  }

  h1 {
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${color.white};
    border-bottom: 1px solid #465a6f;
    padding-bottom: 0.6em;
    margin-bottom: 0.6em;
    width: 37.5em;
  }

  aside {
    display: inline-block;
    width: 35em;
    margin-left: 1em;
    h5 {
      color: ${color.white};
      letter-spacing: 0.3px;
    }

    h6 {
      font-size: 0.7rem;
      color: ${color.white};
      span {
        color: ${color.skyBlue};
      }
    }
  }

  .title-text {
    font-size: 1.1rem;
  }

  .release-text {
    font-size: 0.7rem;
    letter-spacing: 0.4px;
  }

  .overview-text {
    color: ${color.grayBlue};
  }

  img {
    width: 80px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    h1 {
      width: 21rem;
    }

    aside {
      margin-left: unset;

      .title-text {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 21.5rem;
      }

      .overview-text {
        width: 85vw;
      }
    }

    img {
      display: inline-block;
    }
  }
`;

export const SearchedDataContainer = styled(SearchInputContainer)``;
