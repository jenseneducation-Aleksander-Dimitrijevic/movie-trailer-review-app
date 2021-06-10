import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const NavLink = styled(Link)``;

export const NavBarButtonContainer = styled.div`
  position: absolute;
  right: 3em;
  

  @media screen and (max-width: 971px) {
    display: none;
  }
`;

export const HamburgerButtonContainer = styled.div`
  margin-top: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
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
`;

export const CreateButton = styled(LoginButton)`
  width: 180px;
  background: ${color.orange};
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  width: 100vw;
  background: ${color.deepBlue};
  position: fixed;
  padding-left: 15em;
  z-index: 9999;


  .hamburger-icon {
    position: absolute;
    right: 1em;
    color: ${color.white};
    font-size: 1.3rem;
    @media screen and (min-width: 972px) {
      display: none;
    }
  }

  .watchy {
    position: absolute;
    display: flex;
    left: 2em;
    color: ${color.white};
    cursor:pointer;
    bottom: 1.2em;

    .watchy__logo {
      color: ${color.orange};
      font-size: 2.3rem;
      margin-right: 0.3em;
    }
    h1 {
      text-transform: uppercase;
      font-size: 1.6rem;
      margin-top: 0.1em;
    }

    @media screen and (max-width: 768px) {
      left:1em;
    }

  }

  .active {
    color: ${color.orange};
  }

  ul {
    li {
      list-style: none;
      margin-right: 3em;
      font-size: 1rem;
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

  @media screen and (max-width: 768px) {
    ul {
      display: none;
    }
  }

  .searchbar {
    position: absolute;
    top: 3.9em;
    left: 0;
  }
`;

export const HamburgerContainer = styled.nav`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);

  .active {
    color: ${color.orange};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerList = styled.section`
  position: absolute;
  bottom: 0;
  z-index: 3;
  height: 60vh;
  width: 100vw;
  background: ${color.darkBlue};
  box-shadow: -15px 20px 20px -15px #111;

  ul {
    border-bottom: 0.1px solid #465a6f;
    margin-bottom: 1.5em;
    margin-top: 1em;
    padding-top: 0.5em;
    padding-left: 2.2em;
    padding-bottom: 1.3em;
    display: grid;
    justify-content: flex-start;
    li {
      font-size: 0.9rem;
    }
  }
`;
