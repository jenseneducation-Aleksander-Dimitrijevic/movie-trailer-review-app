import { createGlobalStyle } from "styled-components";
import { ColorsGlobal as color } from "../styles/Colors";
export const GlobalStyle = createGlobalStyle`

*,
*::before, 
*::after{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
	background: ${color.deepBlue};
	

    ::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.8);
	background-color: ${color.deepBlue};
}

::-webkit-scrollbar
{
	width: 5px;
	background-color: ${color.darkBlue};
}

::-webkit-scrollbar-thumb
{
	background-color: ${color.skyBlue};
	border: none;
}
}
`;
