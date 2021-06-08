import styled from 'styled-components';
import { ColorsGlobal as color } from "../../styles/Colors";

export const FeedContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content: space-around;

color:white;
.content{
    margin-top:118px;
    display:flex;
    flex-direction:row;
    width:100%;
    height:auto;
    padding-bottom:2em;
}

`
export const LeftContainer = styled.div`
display:none;

@media screen and (min-width: 767px) {
display:block;    
background:${color.darkBlue} ;
margin: 1em;
position: relative; 
right:77%;
left:0;
width:fit-content;
text-transform:uppercase;
padding: 2em;
box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 30px;
h3{
   color:${color.white} 
}
ul{
    list-style: none;
    font-weight:bold;
    li{
        cursor:pointer;
        padding-top: 1em;
        &.highlight{
            opacity:0.5;
            color:${color.lightBlue};
        }
       
    }
}
 
}
@media screen and (min-width: 768px){
    h3{
   color:${color.red} 
}
}
@media screen and (min-width: 1024px){
    position: fixed; 
    h3{
    color:${color.white} 
    }
} 

`
export const CenterContainer = styled.div`
display:flex;
flex-direction:row;
height:100%;
margin-left:0;
width:100%;
align-self:center;

img{
    width:164px;
    
}
ul{
    list-style:none;
}
@media screen and (min-width: 1024px){
    margin-left:30%;

} 

`
export const InnerLeft = styled.div`
display:flex;
flex-direction:column;
padding:1em .5em;
width:100%;
align-items:center;
span{
    align-self:center;
    padding: 0 1.5em;
}
img{
    align-self:center;
   
}
p{
    padding:1.5em 0;
    font-size:16px;
    font-weight: bold;
    align-self:left;
}
li{
    padding:1em;
  
}
@media screen and (min-width: 768px){
    width: 50%;
    &.inside{
        align-self:left;
    }
}
`
export const PeopleFollow = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
margin:0;
padding: .5em 1.5em;

max-width:550px;
.padding{
        padding:0;
       text-align:left;
        color:${color.lightBlue};
    }
h4{
    width: 100%;
}
    img:first-of-type{
        width:4em;
        height: 4em;
        border-radius:50%;
       
    }
    img:last-of-type{
        width: 2em;
        height: 2em;
        margin-right: 1em;
    }
   
    .small-img{
        width:16px;
        height:16px;
    }
`
export const Box = styled.div`
display: flex;
display:flex;
width: 100%;
padding:0 1.5em;
margin: 0;
flex-direction:column;
align-items:left;

`
export const InnerRight = styled.div `
display:none;
@media screen and (min-width: 768px){
display:flex;
height:fit-content;
flex-direction:column;
overflow:hidden;
width: 50%;
aside{
    display: flex;
    padding-left:1em;
}

}

`
export const Background = styled.div`
 background:${color.darkBlue};
    display:flex;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 30px;
    flex-direction:column;
    height:fit-content;
    width:fit-content;
    margin:1em 1em;
   
    padding:1em ;
    h3{
        padding:1em .5em 1em;
        text-transform:uppercase;
        color:white;
    }

`
export const Img = styled.img`
width:104px;
opacity: 0;
/* transition: opacity 5s ease; */
transition: opacity 300ms linear 10ms;
&.loaded {
    opacity: 1;
}

`
export const MoviesContainer = styled.div`
width:100%;
display: flex;
flex-direction:column;
padding:1em;

h3{
    padding: .5em 0;
}
.inner-box{
    padding: .5em 0;
 
}

`
export const Card = styled.div`
display:flex;
flex-direction:row;
width:100%;
aside{
    display:flex;
    flex-direction:column;
    width:100%;
    padding: .2em;
    transition: opacity 300ms linear 10ms;
}

`
export const PeopleCollection = styled.div`
display:flex;
flex-direction:row;
align-items:center;
padding: .5em 0 .5em 0 ;
justify-content: space-between;
h3{
    padding:1em 0;
}
h4{
    width: 100%;
}
    img{
        width:4em;
   
        border-radius:10%;
       
    }
   
    .padding{
        padding:0;
        color:#a0cef0;
        font-weight:bold;
    }
  
`
export const PeopleWhoFollow = styled.div`
display:flex;
flex-direction:row;
align-items:center;
padding: .5em 1.2em .5em .5em;

width:100%;
justify-content: space-between;
h3{
    padding:1em 0;
}

    img{
        width:4em;
        border-radius:50%;
       
    }
    .padding{
        padding:0;
        color:${color.lightBlue};
        font-weight:bold;
    }
  
`