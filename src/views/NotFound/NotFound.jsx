import {NotFoundContainer, DivLink, Cloud, Mandown} from './NotFound.styles';
import {Link} from "react-router-dom";




export const NotFound = () => {  
  return (
   
    <NotFoundContainer>
      <Cloud></Cloud>
      <section className="content">
          <h1>404</h1>
          <h2>This page was lost in space</h2>
          <p>Try using the search bar to find what you're looking for</p>
          <p>Or check out some of our most popular features:</p>
          <DivLink>
            <Link exact to="/">Home </Link>
            <Link exact to="/">Popular movies </Link>
            <Link exact to="/feed">Feed </Link>
          </DivLink>  
      </section>
      <Mandown></Mandown>
    </NotFoundContainer>
  );
};
