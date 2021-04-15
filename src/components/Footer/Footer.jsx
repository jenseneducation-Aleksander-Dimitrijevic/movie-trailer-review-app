import React from "react";
import { FooterContainer, NavLink } from "./FooterStyled";
import { NavBarData } from "../NavBar/NavBarData";

export const Footer = () => {
  return (
    <FooterContainer>
      <header className="header">
        <h1>This is footer</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          excepturi odio sapiente labore nobis fugiat, itaque sunt perspiciatis
          voluptatibus totam.
        </h2>
      </header>
      {NavBarData.map((n) => (
        <ul key={n.id}>
          <li>
            <NavLink exact to={n.path} activeClassName="active">
              <span>{n.title}</span>
            </NavLink>
          </li>
        </ul>
      ))}
    </FooterContainer>
  );
};
