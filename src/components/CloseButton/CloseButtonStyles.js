import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const CloseButtonContainer = styled.div`
  font-size: 2.2rem;
  color: ${color.white};
  position: absolute;
  top: -10px;
  right: -10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
  z-index: 999;
  background: ${color.darkGray};
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  @media screen and (min-width: 1024px) {
    &:hover {
      background: ${color.lightBlue};
    }
  }
`;
