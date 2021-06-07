import { useEffect, useState, useRef } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Hamburger } from "../Hamburger/Hamburger";
import LoginForm from "../Form/LoginForm/LoginForm";
import SignupForm from "../Form/SignupForm/SignupForm";
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

export const NavBar = ({ useQuery, signup, setSignup }) => {
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const hamburgerVisible = () => setShowHamburger(true);
  const hamburgerNotVisible = () => setShowHamburger(false);
  const showLoginBox = () => handleSetLogin(true);

  const handleSetLogin = () => {
    setLogin(true);
    setShow(true);
  };
  const handleSetSignup = () => {
    setSignup(true);
    setShow(true);
  };

  useEffect(() => {
    if (!show) {
      setLogin(false);
      setSignup(false);
    }
  }, [show]);

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
          </li>
        </ul>
      ))}
      <Modal show={show} setShow={setShow}>
        {login && <LoginForm useQuery={useQuery} />}
        {signup && (
          <SignupForm
            useQuery={useQuery}
            setLogin={setLogin}
            setSignup={setSignup}
            signup={signup}
          />
        )}
      </Modal>
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
        <SearchBar useQuery={useQuery} />
      </section>
    </NavBarContainer>
  );
};
