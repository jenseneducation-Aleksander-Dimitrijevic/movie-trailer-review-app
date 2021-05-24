import {CardContainer} from './StreamingServicesStyled';

export default function Card  ({title, imgUrl, text}) {
    return (
        <CardContainer>
        <img src={imgUrl} className="collection-img" alt="services.svg"/>
        <h4>{title}</h4>
        <p className="text">{text}</p>
        </CardContainer>
    )
};
