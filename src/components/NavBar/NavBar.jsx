import { useState } from "react";
import { NavBarData } from "./NavBarData";
import { NavBarContainer, NavLink } from "./NavBarStyled";
import { FaPlayCircle } from "react-icons/fa";
import Modal from "../Modal/ModalForm";

export const NavBar = () => {
  const [arrowUp, setArrowUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const arrowTurn = () => setArrowUp(!arrowUp);

  return (
    <NavBarContainer>
      <span className="watchy">
        <FaPlayCircle className="watchy__logo" />
        <h1>Watchy</h1>
      </span>
      {NavBarData.map((n) => (
        <ul key={n.id}>
          <li>
            <NavLink exact to={n.path} activeClassName="active">
              <span>{n.title}</span>
            </NavLink>
            <span
              className={arrowUp ? "arrow-up" : "arrow-down"}
              onClick={() => arrowTurn()}
            >
              {n.icons}
            </span>
          </li>
        </ul>
      ))}
      <section>
        <button className="login-btn" onClick={() => setLogin(true)}>
          Log in
        </button>
        <button className="create-btn" onClick={() => setSignup(true)}>
          Create a free account
        </button>
      </section>
      <Modal
        login={login}
        setLogin={setLogin}
        signup={signup}
        setSignup={setSignup}
      />
    </NavBarContainer>
  );
};
