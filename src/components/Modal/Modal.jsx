import LoginForm from "../Form/LoginForm/LoginForm";
import { ModalContainer } from "./ModalStyles";

export default function Modal({ login, setLogin }) {
  return (
    <ModalContainer className={login ? "show" : ""}>
      {login && <LoginForm setLogin={setLogin} login={login} />}
    </ModalContainer>
  );
}
