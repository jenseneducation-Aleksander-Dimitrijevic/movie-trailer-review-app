import {StreamingContainer,SteamingButton} from './StreamingServicesStyled';
import Card from './ServiceCards';
import services from "../../assets/svg/services.svg";
import watchlist from "../../assets/svg/watchlist.svg";
import track from "../../assets/svg/track.svg";
import seen from "../../assets/svg/seen.svg";
import rating from "../../assets/svg/rating.svg";
import follow from "../../assets/svg/follow.svg";
import collections from "../../assets/svg/collections.svg";
import matchlist from "../../assets/svg/matchlist.svg";





export  const StreamingServices = () => {
    return (
        <StreamingContainer>
            <section className="container">
                <h3>All Streaming services in one place</h3>
                <h2> Find something great to watch even faster</h2>
            <div className="cardwrapper">
                <Card imgUrl={services}  title="My services" text="Save and filter your services" />
                <Card imgUrl={watchlist}  title="Watchlist" text="Add everything you want to watch" />
                <Card imgUrl={track}  title="Track" text="Alerts for new episodes and big releases" />
                <Card imgUrl={seen}  title="Seen" text="Hide what you already seen" />
                <Card imgUrl={rating}  title="Rate" text="Rate titles and share with followers" />
                <Card imgUrl={follow}  title="Follow" text="See what friends or critics are rating" />
                <Card imgUrl={collections}  title="Collections" text="Create custom collections" />
                <Card imgUrl={matchlist}  title="Save and filter your services" text="Match with friends on what to watch. Like Tinder, but movies" />
            </div>

            <SteamingButton>Create a free account</SteamingButton> 
            
            </section>
        </StreamingContainer>
    )
}
