import React from "react";
import { FooterContainer, NavLink } from "./FooterStyled";
import { FooterLinksData } from "./FooterLinksData";

export const Footer = () => {
  return (
    <FooterContainer>
      <header className="header">
        <h1 className="title">Om Watchy</h1>
        <h2 className="sub-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          excepturi odio sapiente labore nobis fugiat, itaque sunt perspiciatis
          voluptatibus totam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nisi excepturi odio sapiente labore nobis fugiat, itaque sunt
          perspiciatis voluptatibus totam.
        </h2>
      </header>
      <div className="links">
        <ul className="list">
          <li className="list-title">Watchy</li>
          {FooterLinksData.map((link) => (
            <li className="list-item" key={link.id}>
              <NavLink
                exact
                to={link.path}
                activeClassName="active"
                className="list-link"
              >
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="list">
          <li className="list-title">Watchy</li>
          {FooterLinksData.map((link) => (
            <li className="list-item" key={link.id}>
              <NavLink
                exact
                to={link.path}
                activeClassName="active"
                className="list-link"
              >
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="list">
          <li className="list-title">Watchy</li>
          {FooterLinksData.map((link) => (
            <li className="list-item" key={link.id}>
              <NavLink
                exact
                to={link.path}
                activeClassName="active"
                className="list-link"
              >
                <span>{link.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="lower">
        <p className="copy">
          © Playpilot AB (Org nr. 556946-8530), Valhallavägen 66, 114 27
          Stockholm, Sverige
          <br />
          <span>v2.20.5 (f7ffbd3)</span>
        </p>
      </div>
    </FooterContainer>
  );
};
