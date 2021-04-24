import {
  HamburgerContainer,
  NavLink,
  HamburgerList,
  LoginButton,
  CreateButton,
  HamburgerButtonContainer,
} from "./NavBarStyled";

import { AiFillDownCircle } from "react-icons/ai";

export const Hamburger = ({
  NavBarData,
  hamburgerNotVisible,
  showLoginBox,
}) => {
  return (
    <HamburgerContainer>
      <HamburgerList>
        {NavBarData.map((n) => (
          <ul key={n.id}>
            <li>
              <NavLink exact to={n.path} activeClassName="active">
                <span onClick={() => hamburgerNotVisible()}>{n.title}</span>
              </NavLink>
              {/* <span
                className={arrowUp ? "arrow-up" : "arrow-down"}
                onClick={() => arrowTurn()}
                ref={buttonRef}
              >
                {n.icons}
              </span> */}
            </li>
          </ul>
        ))}
        <HamburgerButtonContainer>
          <AiFillDownCircle
            onClick={() => hamburgerNotVisible()}
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "5",
              color: "#475a6e",
              left: "45%",
              top: "-20",
              fontSize: "3rem",
              cursor: "pointer",
            }}
          />
          <LoginButton
            onClick={() => {
              showLoginBox();
              hamburgerNotVisible();
            }}
          >
            Login
          </LoginButton>
          <CreateButton>Create a free Account</CreateButton>
        </HamburgerButtonContainer>
      </HamburgerList>
    </HamburgerContainer>
  );
};
