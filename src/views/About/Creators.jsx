import {CreatorCard, Box} from './AboutStyled';




export default function  Creators  ({name, userName, imgUrl, email})  {
    return(
        <CreatorCard>
        <img src={imgUrl} className="max" alt="max.png"/>
        <Box>
        <h4>{name}</h4>
        <a href={`mailto:${email}`} className="padding">{userName}</a>
        </Box>
        </CreatorCard>
    )
}