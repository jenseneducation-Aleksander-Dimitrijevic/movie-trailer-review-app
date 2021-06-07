import {MoviesContainer, Card, Img } from './FeedStyled';
import { AiFillStar } from "react-icons/ai";



export default function Movies({useQuery}) {
    const {isLoading, error, data } = useQuery(["WatchlistMovies"], () =>
    fetch("/api/popular/").then((res) => res.json()));
        
  if (error) return "An error has occurred: " + error.message;
    return (
        <MoviesContainer >
        <h3>Most watchlisted</h3>

        {data &&
            data.map((d,index) => (
                index <= 4 ?(
                <div className="inner-box" key={d.id}>
                <Card >
                <Img
                     src={`http://image.tmdb.org/t/p/w1280/${
                        d?.poster_path || d?.backdrop_path
                      }`}
                    alt={d?.poster_path || d?.backdrop_path}
                    className={!isLoading ? 'loaded' : ''}
                />
                <aside>
                    <h3 className="title-text">{d?.title || d?.name}</h3>
                    <h4 className="release-text">
                        {d?.release_date.substr(0, 4) ||
                        d?.first_air_date.substr(0, 4)}
                    </h4>
                    <h4 className="rating-text">
                        <AiFillStar
                        style={{
                            color: "yellow",
                        }}
                        />{" "}
                        {d?.vote_average}
                    </h4>
                    </aside>
            </Card>
                </div>

                ): null
            ))}
    </MoviesContainer> 
    )
}
