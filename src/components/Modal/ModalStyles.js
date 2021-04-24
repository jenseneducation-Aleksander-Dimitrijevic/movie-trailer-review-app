import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
  cursor: pointer;

  .content {
    width: 100%;
    max-width: 380px;
    cursor: default;

    &.show {
      animation: 0.3s ${slideUp} ease;
    }
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;
