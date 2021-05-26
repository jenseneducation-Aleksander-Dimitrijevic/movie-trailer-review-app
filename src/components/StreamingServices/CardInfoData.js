
import services from "../../assets/svg/services.svg";
import watchlist from "../../assets/svg/watchlist.svg";
import track from "../../assets/svg/track.svg";
import seen from "../../assets/svg/seen.svg";
import rating from "../../assets/svg/rating.svg";
import follow from "../../assets/svg/follow.svg";
import collections from "../../assets/svg/collections.svg";
import matchlist from "../../assets/svg/matchlist.svg";

export const CardInfoData = [
    {
        imgUrl:services,
        title: "My services",
        text:"Save and filter your services",  
        id: 1,
    },
    {
        imgUrl:watchlist,
        title: "Watchlist",
        text:"Add everything you want to watch",  
        id: 2,
    },
  
    {
        imgUrl:track,
        title: "Tracking",
        text:"Alerts for new episodes and big releases",  
        id: 3,
    },
    {
        imgUrl:seen,
        title: "Seen",
        text:"Hide what you already seen",  
        id: 4,
    },
    {
        imgUrl:rating,
        title: "Rate",
        text:"Rate titles and share with followers",  
        id: 5,
    },
    {
        imgUrl:follow,
        title: "Follow",
        text:"See what friends or critics are rating",  
        id:6
    },
    {
        imgUrl:collections,
        title: "My collections",
        text:"Create custom collections",  
        id:7
    },
    {
        imgUrl:matchlist,
        title: "Save and filter",
        text:"Match with friends on what to watch. Like Tinder, but movies",  
        id:8
    },
  ];