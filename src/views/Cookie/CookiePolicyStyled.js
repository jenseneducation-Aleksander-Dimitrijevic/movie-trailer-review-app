import styled from 'styled-components';
import { ColorsGlobal as color } from "../../styles/Colors";

export const CookieContainer = styled.div`
.container{
    margin-top:118px;
}
display:flex;
flex-direction:column;
width:100%;
padding: 2em 1em;
h1{
    padding:1em .6em;
    color:${color.white};
    text-transform:uppercase;
}
h4{
    padding:1em 1em;
    color:${color.white};
    font-weight:bold;  
}
p{
    padding:.5em 1em;
    color:${color.lightBlue};
    font-weight:bold;
    &:first-of-type(){
        padding:5em ;
    }
}
ul{
    padding: 2em;
    color:${color.lightBlue};
    font-weight:bold;
}
li{
    padding:.1em 1em;
}

a{
    color:${color.lightBlue};
    font-weight:bold;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }  
}
`

