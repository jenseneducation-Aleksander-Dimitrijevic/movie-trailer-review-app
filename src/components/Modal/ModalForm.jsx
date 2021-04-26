import LoginForm from "../Form/LoginForm/LoginForm";
import SignupForm from "../Form/SignupForm/SignupForm";
import { ModalContainer } from "./ModalStyles";
import { useRef } from "react";

export default function Modal({ login, setLogin, signup, setSignup }) {
  const innerRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (innerRef.current.contains(e.target)) return;
    setLogin(false) || setSignup(false);
  };

  const form =
    (login && <LoginForm setLogin={setLogin} login={login} />) ||
    (signup && (
      <SignupForm setSignup={setSignup} signup={signup} setLogin={setLogin} />
    ));

  return (
    <ModalContainer
      className={login || signup ? "show" : ""}
      onClick={handleOverlayClick}
    >
      <main
        className={`content ${signup || login ? "show" : "hide"}`}
        ref={innerRef}
      >
        {form}
      </main>
    </ModalContainer>
  );
}
