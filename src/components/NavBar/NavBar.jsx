import { NavBarData } from "./NavBarData";
import { NavBarContainer, NavLink } from "./NavBarStyled";
import { FaPlayCircle } from "react-icons/fa";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <span>
        <FaPlayCircle />
      </span>
      {NavBarData.map((n) => (
        <ul key={n.id}>
          <li>
            <NavLink exact to={n.path} activeClassName="active">
              <span>{n.title}</span>
              <span>{n.icons}</span>
            </NavLink>
          </li>
        </ul>
      ))}
    </NavBarContainer>
  );
};
