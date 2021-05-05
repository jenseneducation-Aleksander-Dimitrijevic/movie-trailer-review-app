import styled from 'styled-components';

export const FeedContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content: space-around;
height:100vh;
color:white;
.content{
    margin-top:118px;
    display:flex;
    flex-direction:row;
    font-weight: uppercase;
    width:100%;
    padding-left:1rem;
}
`
export const LeftContainer = styled.div`
background:#1C2D3C ;
margin: 1em;
font-weight: uppercase;
position: fixed;
padding: 2em;
h3{
    font-weight: uppercase;
}
ul{
    list-style: none;
    font-weight:bold;
    li{
        padding-top: 1em;
        font-weight: uppercase;
    }
}

`
export const CenterContainer = styled.div`
display:flex;
flex-direction:row;
padding:1em 0;
height:100%;
width:60%;
margin: auto;
img{
    width:164px;
}
ul{
    list-style:none;
}

`
export const InnerLeft = styled.div`
display:flex;
flex-direction:column;
padding: 1em 0;
width:50%;
align-items:center;
padding: 1.5rem;
p{
    padding:1.5rem;
    font-size:16px;
    font-weight: bold;
}
li{
    padding:1.5rem;
}
`
export const InnerRight = styled.div `
display:flex;
flex-direction:column;
width: 50%;

`
export const Img = styled.img`
width:104px;
height:54px;
display:flex;
`
export const Movies = styled.div`
width:100%;


`
