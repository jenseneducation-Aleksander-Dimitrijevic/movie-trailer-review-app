import { NavBarData } from "./NavBarData";
import { NavBarContainer, NavLink } from "./NavBarStyled";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <nav>
        {NavBarData.map((n) => (
          <ul key={n.id}>
            <li>
              <NavLink exact to={n.path} activeClassName="active">
                <span>{n.title}</span>
              </NavLink>
            </li>
          </ul>
        ))}
      </nav>
    </NavBarContainer>
  );
};
