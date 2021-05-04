import { CloseButtonContainer } from "./CloseButtonStyles";

export default function CloseButton({ setLogin }) {
  const closeModal = () => setLogin(false);
  return (
    <CloseButtonContainer onClick={closeModal}>&times;</CloseButtonContainer>
  );
}
