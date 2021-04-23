import { FormContainer } from "../FormStyles";
import { FaGoogle } from "react-icons/fa";
import CloseButton from "../CloseButton/CloseButton";
import { useEffect, useState } from "react";

export default function LoginForm({ setLogin, login }) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    !login && setInput({ email: "", password: "" });
  }, [login]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({ email: "", password: "" });
  };

  return (
    <FormContainer className={login ? "show" : "hide"} onSubmit={handleSubmit}>
      <CloseButton setLogin={setLogin} />
      <header className="header">
        <h1 className="header-title">Registrera dig/fortsätt med</h1>
        <section className="icons">
          <FaGoogle className="icons-google icons-content" />
        </section>
      </header>
      <main className="form-content">
        <header className="form-header">
          <h1 className="form-title">Logga in med e-postadress</h1>
        </header>
        <div className="form-row">
          {/* <label className="form-label">E-post</label> */}
          <input
            type="email"
            className="form-field"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            placeholder="E-post"
          />
        </div>
        <div className="form-row">
          {/* <label className="form-label">Lösenord</label> */}
          <input
            type="password"
            className="form-field"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            placeholder="Lösenord"
          />
        </div>
        <button className="form-submit">Logga in</button>
      </main>
    </FormContainer>
  );
}
