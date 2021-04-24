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
          © Watchy AB (Org nr. 12345678-1234), Valhallavägen 123, 123 45
          Stockholm, Sverige
          <br />
          <span>v1.10.2 (f3ffce3)</span>
        </p>
      </div>
    </FooterContainer>
  );
};
