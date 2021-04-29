import { CloseButtonContainer } from "./CloseButtonStyles";

export default function CloseButton({ setShow }) {
  const closeModal = () => {
    setShow(false);
  };
  return (
    <CloseButtonContainer onClick={closeModal}>&times;</CloseButtonContainer>
  );
}
