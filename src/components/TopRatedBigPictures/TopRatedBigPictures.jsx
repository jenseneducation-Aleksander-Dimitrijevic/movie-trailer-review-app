import {
  TopRatedBigPicturesContainer,
  TopRatedBigPicturesContent,
  HeaderBigPictures,
  ImagesToprated,
} from "./TopRatedBigPicturesStyled";

import { AiFillStar } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

export const TopRatedBigPictures = ({ useQuery }) => {
  const { error, data } = useQuery(["PopularMovies"], () =>
    fetch("/api/popular").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <HeaderBigPictures>
        Top 100 in the world{" "}
        <span>
          <BiWorld />
        </span>
      </HeaderBigPictures>
      <TopRatedBigPicturesContainer>
        {data && (
          <>
            {data.map((d) => (
              <TopRatedBigPicturesContent key={d.id}>
                <ImagesToprated
                  src={`http://image.tmdb.org/t/p/w1280/${d?.backdrop_path}`}
                  alt={d?.poster_path || d?.backdrop_path}
                />
                <aside>
                  <h5 className="title-text">
                    {d?.title || d?.name}{" "}
                    <span>
                      <AiFillStar
                        style={{
                          color: "yellow",
                        }}
                      />{" "}
                      {d?.vote_average}
                    </span>
                  </h5>
                  <h5 className="overview-text">
                    <span>
                      {" "}
                      {d?.release_date.substr(0, 4) ||
                        d?.first_air_date.substr(0, 4)}{" "}
                    </span>
                    {d?.overview?.length > 200
                      ? d?.overview.substr(0, 200) + "... Read more"
                      : d?.overview}
                  </h5>
                </aside>
              </TopRatedBigPicturesContent>
            ))}
          </>
        )}
      </TopRatedBigPicturesContainer>
    </>
  );
};
