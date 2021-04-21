import styled from "styled-components";

export const ModalContainer = styled.div`
  transition: all 0.3s ease;
  &.show {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
  }
`;
