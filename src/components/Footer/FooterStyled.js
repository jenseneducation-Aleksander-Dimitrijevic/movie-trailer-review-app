import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { ColorsGlobal as color } from "../../styles/Colors";

export const FooterContainer = styled.footer`
  background: ${color.darkBlue};
  padding: 1.5rem 1rem;

  @media screen and (min-width: 767px) {
    padding: 2.5rem 2rem;
  }

  h1.title {
    color: ${color.white};
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 0.05em;
    padding: 0 0 20px 0;

    @media screen and (min-width: 767px) {
      font-size: 22px;
    }
  }

  h2.sub-title {
    font-size: 13px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.03em;
    color: ${color.white};
    width: 100%;
    padding: 0 0 36px;

    @media screen and (min-width: 767px) {
      font-size: 15px;
    }

    @media screen and (min-width: 767px) {
      max-width: 70%;
    }
  }

  .links {
    display: grid;
    gap: 2rem;
    padding: 0 0 56px;

    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1023px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .list {
      list-style: none;

      &-title {
        color: ${color.white};
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0 0 6px 0;

        @media screen and (min-width: 767px) {
          font-size: 18px;
        }
      }
    }
  }

  .lower {
    .copy {
      color: ${color.lightBlue};
      font-size: 13px;
      font-weight: 600;

      span {
        padding: 20px 0 0;
        display: block;
        color: ${color.purpleGray};
      }
    }
  }
`;

export const NavLink = styled(Link)`
  font-size: 12px;
  color: ${color.skyBlue};
  text-decoration: none;
  line-height: 1.5;
  padding: 6px 0;
  font-weight: 600;
  display: inline-block;

  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
`;
