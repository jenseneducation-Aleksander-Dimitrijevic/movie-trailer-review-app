import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const NavLink = styled(Link)``;
export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: ${color.deepBlue};

  .active {
    color: ${color.orange};
  }

  ul {
    li {
      list-style: none;
      a {
        text-decoration: none;

        span {
        }
      }
    }
  }
`;
