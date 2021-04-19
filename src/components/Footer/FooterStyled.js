import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { ColorsGlobal as color } from "../../styles/Colors";
export const FooterContainer = styled.footer`
  background: ${color.darkBlue};
  padding: 2rem;

  h1.title {
    color: ${color.white};
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 0.05em;
    padding: 0 0 20px 0;
  }

  h2.sub-title {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.03em;
    color: ${color.white};
  }
`;
export const NavLink = styled(Link)``;
