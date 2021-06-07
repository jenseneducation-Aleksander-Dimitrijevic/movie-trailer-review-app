import {PeopleWhoFollow, Box} from './FeedStyled';




export default function  WhoFollow ({name, userName, imgUrl})  {
    return(
        <PeopleWhoFollow>
        <img src={imgUrl} className="max" alt="max.png"/>
        <Box>
        <h4>{name}</h4>
        <p className="padding">{userName}</p>
        </Box>
      
        </PeopleWhoFollow>
    )
}