import { Link } from "react-router-dom";

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
            {data.map((item, idx) =>
              idx <= 1 ? (
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `/show/${item?.name || item?.title}`,
                    data: {
                      item,
                    },
                  }}
                  key={item.id}
                >
                  <TopRatedBigPicturesContent>
                    <ImagesToprated
                      src={`http://image.tmdb.org/t/p/w1280/${item?.backdrop_path}`}
                      alt={item?.poster_path || item?.backdrop_path}
                    />
                    <aside>
                      <h5 className="title-text">
                        {item?.title || item?.name}{" "}
                        <span>
                          <AiFillStar
                            style={{
                              color: "yellow",
                            }}
                          />{" "}
                          {item?.vote_average}
                        </span>
                      </h5>
                      <h5 className="overview-text">
                        <span>
                          {" "}
                          {item?.release_date.substr(0, 4) ||
                            item?.first_air_date.substr(0, 4)}{" "}
                        </span>
                        {item?.overview?.length > 200
                          ? item?.overview.substr(0, 200) + "... Read more"
                          : item?.overview}
                      </h5>
                    </aside>
                  </TopRatedBigPicturesContent>
                </Link>
              ) : null
            )}
          </>
        )}
      </TopRatedBigPicturesContainer>
    </>
  );
};
