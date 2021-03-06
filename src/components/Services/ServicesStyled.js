import styled from 'styled-components';

export const ServicesContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
@media screen and (max-width: 768px) {
    overflow:scroll hidden;
    width: 100vw;

}
`
export const IconsContainer = styled.section`
margin-top: 1em;
display: flex;

`

export const Icons = styled.img`
width: 2em;
cursor: pointer;
margin-right: 1em;
border-radius:4px;

@media screen and (max-width: 768px){
    margin-right: 0.5em;
    width: 2.3em;

}
`