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
    if (Object.values(input).some((input) => input === "")) return;
    console.log(input);
    setInput({ email: "", password: "" });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CloseButton setLogin={setLogin} />
      <header className="account">
        <h1 className="account-title">Registrera dig/fortsätt med</h1>
        <div className="icons">
          <FaGoogle className="icons-logo icons-content icons-primary" />
        </div>
      </header>
      <main className="form-content">
        <header className="form-header">
          <h1 className="form-title">Logga in med e-postadress</h1>
        </header>
        <div className="form-row">
          <input
            type="email"
            className="form-field"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            placeholder="E-post"
          />
        </div>
        <div className="form-row">
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
