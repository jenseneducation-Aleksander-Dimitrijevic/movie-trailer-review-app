import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg) 
`;

/* HELPERS */
const reduceMarginInHalf = css`
  margin-top: ${(props) =>
    props.calign ? "-" + parseInt(props.size / 2) + "px" : null};
  margin-left: ${(props) =>
    props.calign ? "-" + parseInt(props.size / 2) + "px" : null};
`;

const centerHorizontal = css`
  margin: ${(props) => (props.center ? "auto" : null)};
`;

const centerVertical = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const centerVerticalHorizontal = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, 0);
`;

export default styled.div.attrs((props) => ({
  size: props.size || "30",
  color: props.color || "#fff",
  center: props.center || false,
  valign: props.valign || false,
  calign: props.calign || false,
}))`
  width: ${(props) =>
    !props.size.includes("px")
      ? props.size + "px"
      : console.error(
          "Syntax error: 'Size' prop must only include numbers i.e 123 NOT 123px"
        )};
  height: ${(props) => props.size + "px"};
  border: 3px solid;
  border-radius: 50%;
  border-color: transparent transparent ${(props) => props.color};
  ${(props) => (props.center ? centerHorizontal : null)}
  ${(props) => (props.calign ? reduceMarginInHalf : null)};
  animation: 1s ${spin} infinite;
  ${(props) => (props.valign ? centerVertical : null)}
  ${(props) => (props.calign ? centerVerticalHorizontal : null)};
`;
