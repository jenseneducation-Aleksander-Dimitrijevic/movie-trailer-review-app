import {FeedContainer,InnerLeft,Data, Movies, InnerRight, LeftContainer, CenterContainer, Img} from './FeedStyled';
import logo from './png/star.png'; 
import { useQuery } from 'react-query';
import { AiFillStar } from "react-icons/ai";


export const Feed = () => {
    const {isLoading, error, data } =useQuery(["Movies"], () =>
    
        fetch("/api/popular/").then((res) => res.json())
      
    
  );
  if (error) return "An error has occurred: " + error.message;
    return(
        <FeedContainer>
            <section className="content">
            <LeftContainer>
                <h3>Feed</h3>
                <ul>
                    <li>Followed friend</li>
                    <li>Watchlist updates</li>
                </ul>
            </LeftContainer>
            <CenterContainer>
            <InnerLeft>
            <img src={logo} alt="star.png"/>
            <p>Follow your friends to se what they watch</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>

            </InnerLeft>
            <InnerRight >
            <Movies>
                <h3>Most watchlisted</h3>
                {data &&
                    data.map((d) => (
                        <div key={d.id}>
                        <Img
                             src={`http://image.tmdb.org/t/p/w1280/${
                                d?.poster_path || d?.backdrop_path
                              }`}
                            alt={d?.poster_path || d?.backdrop_path}
                        />
                        <aside>
                            <h5 className="title-text">{d?.title || d?.name}</h5>
                            <h5 className="release-text">
                                {d?.release_date.substr(0, 4) ||
                                d?.first_air_date.substr(0, 4)}
                            </h5>
                            <h5 className="rating-text">
                                <AiFillStar
                                style={{
                                    color: "#ffffff",
                                }}
                                />{" "}
                                {d?.vote_average}
                            </h5>
                            {/* <HiddenInfo>
                                <h5 className="overview-text">
                                {d?.overview?.length > 200
                                    ? d?.overview.substr(0, 200) + "..."
                                    : d?.overview}
                                </h5>
                            </HiddenInfo> */}
                            </aside>
                        </div>
                    ))}
            </Movies> 
      
            </InnerRight>
            </CenterContainer>
           
            </section>
        </FeedContainer>
    )
}