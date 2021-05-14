import {PeopleCollection, Box} from './FeedStyled';

export default function Collection  ({name, imgUrl, userName}) {
    return (
        <PeopleCollection>
        <img src={imgUrl} className="collection-img" alt="max.png"/>
        <Box>
        <h4>{name}</h4>
        <p className="padding">{userName}</p>
        </Box>
        </PeopleCollection>
    )
}
