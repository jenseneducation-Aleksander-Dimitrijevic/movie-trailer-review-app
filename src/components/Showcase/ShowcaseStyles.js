import styled from "styled-components";
import { ColorsGlobal as color } from "../../styles/Colors";

export const ShowcaseContainer = styled.div`
  text-align: center;

  .header {
    padding: 3rem 10px 0;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    &-title {
      font-size: 1.4rem;
      color: ${color.white};
    }
    &-sub-title {
      font-size: 12px;
      color: ${color.lightBlue};
      padding: 5px 0 10px;
    }
  }

  .image {
    width: 60%;
    margin: auto;
    display: block;
  }
`;
