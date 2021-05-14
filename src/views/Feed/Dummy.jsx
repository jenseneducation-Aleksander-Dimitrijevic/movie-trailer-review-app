
import add from '../../assets/svg/user-follow.svg'; 
import {PeopleFollow, Box} from './FeedStyled';




export default function  Dummy  ({name, userName, imgUrl})  {
    return(
        <PeopleFollow>
        <img src={imgUrl} className="max" alt="max.png"/>
        <Box>
        <h4>{name}</h4>
        <p className="padding">{userName}</p>
        </Box>
        <img className="small-img" src={add} alt="user-follow.svg"/>
        </PeopleFollow>
    )
}