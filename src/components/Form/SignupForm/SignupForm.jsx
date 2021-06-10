import { FormContainer } from "../FormStyles";
import { FiMail } from "react-icons/fi";
import { useState } from "react";
import Showcase from "../../Showcase/Showcase";
import { images } from "./ImageData";
import { useHistory } from "react-router";

export default function SignupForm({ setLogin, setSignup, signup }) {
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const [form, setForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(input).some((input) => input === "")) return;
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          sessionStorage.setItem("__user__", JSON.stringify(data.user));
          history.push("/");
          window.location.reload();
        }
      });

    setInput({ email: "", password: "", fullName: "" });
  };

  const toggleForm = () => {
    setLogin(true);
    setForm(false);
    setSignup(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {form ? (
        <div>
          <header className="account signup">
            <h1 className="account-title">CONTINUE WITH E-MAIL</h1>
          </header>
          <main className="form-content">
            <div className="form-row">
              <input
                required
                type="email"
                className="form-field"
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                placeholder="E-mail"
              />
            </div>
            <div className="form-row">
              <input
                required
                type="password"
                className="form-field"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
                placeholder="Password"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                required
                className="form-field"
                value={input.fullName}
                onChange={(e) =>
                  setInput({ ...input, fullName: e.target.value })
                }
                placeholder="Full name"
              />
            </div>
            <button
              className="form-submit"
              style={signup ? { margin: "2rem 0 20px" } : null}
            >
              Create account
            </button>
            <button
              onClick={toggleForm}
              type="button"
              className="form-redirect"
            >
              Click here if you already have an account
            </button>
          </main>
        </div>
      ) : (
        <div>
          <header>
            <Showcase
              images={images}
              title="SEARCH LESS, WATCH MORE"
              subTitle="CREATE A FREE ACCOUNT"
            />
          </header>
          <footer className="account footer">
            <h1 className="account-title">Sign in / continue with</h1>
            <div className="cta-container">
              <button type="button" className="icon bg-white">
                <img
                  className="icon-image"
                  src={require("../../../assets/icons/icon-google.png").default}
                  alt="logo"
                />
              </button>
              <button
                type="button"
                className="icon bg-white react-icon"
                onClick={() => setForm(true)}
              >
                <FiMail />
              </button>
            </div>
            <div className="agreement">
              By using our service, you agree to our Terms and Conditions and
              our Privacy Policy
            </div>
          </footer>
        </div>
      )}
    </FormContainer>
  );
}
