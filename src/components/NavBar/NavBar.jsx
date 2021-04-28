import { useState, useRef } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Hamburger } from "../Hamburger/Hamburger";

import { NavBarData } from "./NavBarData";
import {
  NavBarContainer,
  NavLink,
  NavBarButtonContainer,
  LoginButton,
  CreateButton,
} from "./NavBarStyled";
import { FaPlayCircle } from "react-icons/fa";
import Modal from "../Modal/ModalForm";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const NavBar = () => {
  const [arrowUp, setArrowUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const hamburgerVisible = () => setShowHamburger(true);
  const hamburgerNotVisible = () => setShowHamburger(false);
  const showLoginBox = () => setLogin(true);
  const handleSetLogin = () => setLogin(true);
  const handleSetSignup = () => setSignup(true);

  const arrowTurn = () => {
    buttonRef.current.focus();
    setArrowUp(!arrowUp);
  };

  const buttonRef = useRef(null);

  return (
    <NavBarContainer>
      <NavLink exact to="/">
        <span className="watchy">
          <FaPlayCircle className="watchy__logo" />
          <h1>Watchy</h1>
        </span>
      </NavLink>
      {NavBarData.map((n) => (
        <ul key={n.id}>
          <li>
            <NavLink exact to={n.path} activeClassName="active">
              <span>{n.title}</span>
            </NavLink>
            <span
              className={arrowUp ? "arrow-up" : "arrow-down"}
              onClick={() => arrowTurn()}
              ref={buttonRef}
            >
              {n.icons}
            </span>
          </li>
        </ul>
      ))}
      <Modal
        login={login}
        setLogin={setLogin}
        signup={signup}
        setSignup={setSignup}
      />
      {showHamburger ? (
        <span className="hamburger-icon">
          <AiOutlineClose onClick={() => hamburgerNotVisible()} />
        </span>
      ) : (
        <span className="hamburger-icon">
          <GiHamburgerMenu onClick={() => hamburgerVisible()} />
        </span>
      )}
      {showHamburger && (
        <Hamburger
          NavBarData={NavBarData}
          showLoginBox={showLoginBox}
          handleSetSignup={handleSetSignup}
          hamburgerNotVisible={hamburgerNotVisible}
        />
      )}
      <NavBarButtonContainer>
        <LoginButton onClick={() => handleSetLogin()}>Log in</LoginButton>
        <CreateButton onClick={() => handleSetSignup()}>
          Create a free account
        </CreateButton>
      </NavBarButtonContainer>
      <section className="searchbar">
        <SearchBar />
      </section>
    </NavBarContainer>
  );
};
