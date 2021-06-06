import React from "react";
import { FooterContainer, NavLink } from "./FooterStyled";
import { FooterLinksData } from "./FooterLinksData";

export const Footer = () => {
  return (
    <FooterContainer>
      <header className="header">
        <h1 className="title">Om Watchy</h1>
        <h2 className="sub-title">
        Our mission is to give everyone a voice and show them the world. We believe that everyone deserves to have a voice, and that the world is a better place when we listen, share and build community through our stories. Our values are based on four essential freedoms that define who we are.
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
