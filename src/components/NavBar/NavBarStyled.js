import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const NavLink = styled(Link)``;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  width: 100vw;
  background: ${color.deepBlue};
  position: fixed;
  padding-left: 15em;

  .watchy {
    position: absolute;
    display: flex;
    left: 2em;
    color: ${color.white};

    .watchy__logo {
      color: ${color.orange};
      font-size: 2.3rem;
      margin-right: 0.3em;
    }
    h1 {
      text-transform: uppercase;
      font-size: 1.6rem;
      margin-top: 0.2em;
    }
  }

  .active {
    color: ${color.orange};
  }

  ul {
    li {
      list-style: none;
      margin-right: 2em;
      font-size: 1.09rem;
      font-weight: bold;
      text-align: center;
      a {
        text-decoration: none;
        color: ${color.white};
      }
      .arrow-up {
        color: ${color.darkGray};
        margin-left: 4px;
        transition: all 0.4s ease-in-out;
        transform: rotate(180deg);
        cursor: pointer;
        display: inline-block;
      }

      .arrow-down {
        color: ${color.darkGray};
        margin-left: 4px;
        transition: all 0.4s ease-in-out;
        transform: unset;
        cursor: pointer;
        display: inline-block;
      }
    }
  }

  section {
    position: relative;
    right: -9.5em;
    .login-btn {
      height: 25px;
      width: 80px;
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 5px;
      outline: none;
      border: none;
      color: ${color.white};
      background: ${color.darkGray};
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      margin-right: 8px;

      &:hover {
        opacity: 0.8;
      }
    }

    .create-btn {
      height: 25px;
      width: 180px;
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
  }
`;
