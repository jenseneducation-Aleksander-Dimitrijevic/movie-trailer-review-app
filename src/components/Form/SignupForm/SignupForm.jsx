import { FormContainer } from "../FormStyles";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import CloseButton from "../CloseButton/CloseButton";
import { useEffect, useState } from "react";
import Showcase from "../../Showcase/Showcase";
import { images } from "./ImageData";

export default function SignupForm({ setSignup, signup, setLogin }) {
  const [input, setInput] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const [form, setForm] = useState(false);

  useEffect(() => {
    !signup && setInput({ email: "", password: "", fullName: "" });
  }, [signup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(input).some((input) => input === "")) return;
    console.log(input);
    setInput({ email: "", password: "", fullName: "" });
  };

  const toggleForm = () => {
    setSignup(false);
    setLogin(true);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CloseButton setSignup={setSignup} signup={signup} />
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
            <div className="icons">
              <FaGoogle className="icons-logo icons-content icons-primary icons-google" />
              <FaRegEnvelope
                className="icons-logo icons-content icons-primary icons-light-theme icons-account"
                onClick={() => setForm(true)}
              />
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
