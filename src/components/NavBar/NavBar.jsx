import { useState, useRef, useEffect } from "react";

import { NavBarData } from "./NavBarData";
import { NavBarContainer, NavLink } from "./NavBarStyled";
import { FaPlayCircle } from "react-icons/fa";

export const NavBar = () => {
  const [arrowUp, setArrowUp] = useState(false);

  const arrowTurn = () => {
    buttonRef.current.focus();
    setArrowUp(!arrowUp);
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef) {
      console.log("asdsa");
    }
  });

  return (
    <NavBarContainer>
      <span className="watchy">
        <FaPlayCircle className="watchy__logo" />
        <h1>Watchy</h1>
      </span>
      {NavBarData.map((n, idx) => (
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
      <section>
        <button className="login-btn">Log in</button>
        <button className="create-btn">Create a free account</button>
      </section>
    </NavBarContainer>
  );
};
