import { FormContainer } from "../FormStyles";
import { FaGoogle } from "react-icons/fa";
import CloseButton from "../CloseButton/CloseButton";

export default function LoginForm({ setLogin, login }) {
  return (
    <FormContainer className={login ? "show" : ""}>
      <CloseButton setLogin={setLogin} />
      <header className="header">
        <h1 className="header-title">Registrera dig/fortsätt med</h1>
        <section className="icons">
          <FaGoogle className="icons-google icons-content" />
        </section>
      </header>
      <form className="form">
        <header className="form-header">
          <h1 className="form-title">Logga in med e-postadress</h1>
        </header>
        <input type="email" className="form-field" placeholder="E-post" />
        <input type="password" className="form-field" placeholder="Lösenord" />
        <button className="form-submit">Logga in</button>
      </form>
    </FormContainer>
  );
}
