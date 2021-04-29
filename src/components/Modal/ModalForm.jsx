import { ModalContainer } from "./ModalStyles";
import CloseButton from "../CloseButton/CloseButton";
import { useRef } from "react";

export default function Modal({ ...props }) {
  const innerRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (innerRef.current.contains(e.target)) return;
    props.setShow(false);
  };

  return (
    <ModalContainer
      className={props.show ? "show" : ""}
      onClick={handleOverlayClick}
    >
      <main
        className={`content ${props.show ? "show" : "hide"}`}
        ref={innerRef}
      >
        {props.show && <CloseButton setShow={props.setShow} />}
        {props.children}
      </main>
    </ModalContainer>
  );
}
