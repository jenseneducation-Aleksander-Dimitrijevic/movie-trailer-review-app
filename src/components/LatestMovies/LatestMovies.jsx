import { Link } from "react-router-dom";

import {
  LatestMoviesContainer,
  HeaderLatestMovies,
  LatestMoviesData,
} from "./LatestMoviesStyled";
import {
  SeeTrailerButtonContainer,
  SeeTrailerButtons,
} from "../TopRated/TopRatedStyled";

import { AiFillStar } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";

export const LatestMovies = ({ useQuery, showTrailerVisible }) => {
  const { error, data } = useQuery(["LatestMovies"], () =>
    fetch("/api/latest").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <HeaderLatestMovies>
        Latest Movies
        <span>
          <BiMovie />
        </span>
      </HeaderLatestMovies>
      <LatestMoviesContainer>
        {data && (
          <>
            {data.map(
              (item, idx) =>
                idx <= 5 && (
                  <>
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
                      <LatestMoviesData>
                        <img
                          className="hide-img-bigger"
                          src={`http://image.tmdb.org/t/p/w1280/${item?.poster_path}`}
                          alt={item?.poster_path || item?.backdrop_path}
                        />
                        <aside>
                          <h5 className="title-text">
                            {item?.title || item?.name}
                          </h5>
                          <h5 className="rating-text">
                            <AiFillStar
                              style={{
                                color: "yellow",
                              }}
                            />{" "}
                            {item?.vote_average}
                          </h5>
                        </aside>
                        <SeeTrailerButtonContainer>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={{
                              pathname: "/",
                              state: { data: item },
                            }}
                          >
                            <SeeTrailerButtons
                              onClick={() => showTrailerVisible()}
                            >
                              <span>
                                <BsPlay className="play-icon" /> Trailer
                              </span>
                            </SeeTrailerButtons>
                          </Link>
                        </SeeTrailerButtonContainer>
                      </LatestMoviesData>
                    </Link>
                  </>
                )
            )}
          </>
        )}
      </LatestMoviesContainer>
    </>
  );
};
