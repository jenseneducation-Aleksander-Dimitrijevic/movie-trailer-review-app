import LoginForm from "../Form/LoginForm/LoginForm";
import { ModalContainer } from "./ModalStyles";
import { useRef } from "react";

export default function Modal({ login, setLogin }) {
  const innerRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (innerRef.current.contains(e.target)) return;
    setLogin(false);
  };

  return (
    <ModalContainer
      className={login ? "show" : ""}
      onClick={handleOverlayClick}
    >
      <main className="content" ref={innerRef}>
        <LoginForm setLogin={setLogin} login={login} />
      </main>
    </ModalContainer>
  );
}
