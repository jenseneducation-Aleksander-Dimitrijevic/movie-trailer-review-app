import { CloseButtonContainer } from "./CloseButtonStyles";

export default function CloseButton({ setLogin, setSignup, signup }) {
  const closeModal = () => {
    signup ? setSignup(false) : setLogin(false);
  };
  return (
    <CloseButtonContainer onClick={closeModal}>&times;</CloseButtonContainer>
  );
}
