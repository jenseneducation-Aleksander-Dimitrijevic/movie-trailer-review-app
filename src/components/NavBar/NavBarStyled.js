import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const NavLink = styled(Link)``;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;

  .active {
    color: ${color.deepBlue};
  }

  ul {
    li {
      a {
        text-decoration: none;

        span {
        }
      }
    }
  }
`;
