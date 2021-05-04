import { FormContainer } from "../FormStyles";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";

export default function LoginForm({ login }) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(input).some((input) => input === "")) {
      setLoading(true);
      setTimeout(() => {
        setError("Incorrect e-mail or password");
        setLoading(false);
      }, 500);
      return;
    }
    console.log(input);
    setError("");
    setInput({ email: "", password: "" });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <header className="account">
        <h1 className="account-title">SIGN IN / CONTINUE WITH</h1>
        <button type="button" className="icon bg-white">
          <img
            className="icon-image"
            src={require("../../../assets/icons/icon-google.png").default}
            alt="logo"
          />
        </button>
      </header>
      <main className="form-content">
        <header className="form-header">
          <h1 className="form-title">SIGN IN WITH EMAIL</h1>
        </header>
        <div className="form-row">
          <input
            type="email"
            className="form-field"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            placeholder="E-mail"
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            className="form-field"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            placeholder="Password"
          />
        </div>
        {error && <p className="error-msg">{error}</p>}
        <button className="form-submit">
          {loading ? <Spinner center /> : "Sign in"}
        </button>
      </main>
    </FormContainer>
  );
}
