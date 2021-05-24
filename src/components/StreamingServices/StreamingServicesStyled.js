import styled from 'styled-components';
import { ColorsGlobal as color } from "../../styles/Colors";
import background_1 from "../../assets/svg/background_1.svg";
import background_2 from "../../assets/svg/background_2.svg";
import background_3 from "../../assets/svg/background_3.svg";
import background_4 from "../../assets/svg/background_4.svg";
import background_5 from "../../assets/svg/background_5.svg";
import background_6 from "../../assets/svg/background_6.svg";
import background_7 from "../../assets/svg/background_7.svg";
import background_8 from "../../assets/svg/background_8.svg";
import servces from "../../assets/svg/services.svg";

export const StreamingContainer = styled.div`
.container{
    margin-top:118px;
}
display:flex;
flex-direction:column;
width:100%;
padding: 2em 1em;
h2{
    color: ${color.lightBlue};
    text-transform: uppercase;
}
h3{
    color : ${color.white};
    text-transform: uppercase;
}
.cardwrapper{
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    gap: 1.5em;
    margin: .5em 0 1.5em;
    margin: 1em auto;
    padding: 1.5em;
    
    @media screen and (min-width: 768px){
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 1.5em;
    margin: 1em auto;
    max-width: 100%;
  
 
    }

    @media screen and (min-width: 1024px){
        width: 60%;
    }
}

`
export const SteamingButton = styled.button`
background-color: ${color.limeGreen} ;
color: ${color.white};
padding: 1em 3em;
margin: 1em ;
font-weight:bold;
font-size: 20px;
border-radius: 10px;
outline: none;
cursor: pointer;
text-transform: uppercase;
&:hover{
    opacity: 0.5;
}

`

export const CardContainer = styled.div`
max-width: 100%;
width: 20em;
height: 20em;
border-radius: .5em 0 1.5;
font-size: 9px;
margin: 1em auto;
padding: 1em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 1em;
position: relative;
background-repeat: no-repeat;
background-size: cover;
background-repeat: no-repeat;
cursor: pointer;
color:${color.white}
/* object-fit: center; */
h4{
    text-transform: uppercase;
    font-size: 12px;
}
.text{
    font-size: 9px;
}
@media screen and (min-width: 768px){
    max-width: 25em;
    padding: 2em 2em;
    h4{
    font-size: 18px;
    }
    p{
        font-size:12px;
    }

}
@media screen and (min-width: 1024px){
    max-width: 40em;
}

img{
    width: 45px;
    height: 60px;
    padding: 1em 0;
}
&:first-of-type{
    background-image: url(${background_1});
}
&:nth-of-type(2){
    background-image: url(${background_2});
}
&:nth-of-type(3){
    background-image: url(${background_3});
}
&:nth-of-type(4){
    background-image: url(${background_4});
}
&:nth-of-type(5){
    background-image: url(${background_5});
}
&:nth-of-type(6){
    background-image: url(${background_6});
}
&:nth-of-type(7){
    background-image: url(${background_7});
}
&:nth-of-type(8){
    background-image: url(${background_8});
}
`

