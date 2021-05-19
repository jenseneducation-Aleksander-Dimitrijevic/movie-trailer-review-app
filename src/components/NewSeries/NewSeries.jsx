import { Link } from "react-router-dom";

import {
  NewSeriesContainer,
  HeaderNewSeries,
  NewSeriesData,
} from "./NewSeriesStyled";
import {
  SeeTrailerButtonContainer,
  SeeTrailerButtons,
} from "../TopRated/TopRatedStyled";

import { AiFillStar } from "react-icons/ai";
import { BsFilm, BsPlay } from "react-icons/bs";

export const NewSeries = ({ useQuery, showTrailerVisible }) => {
  const { error, data } = useQuery(["NewSeries"], () =>
    fetch("/api/latest-series").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <HeaderNewSeries>
        Latest series
        <span>
          <BsFilm />
        </span>
      </HeaderNewSeries>
      <NewSeriesContainer>
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
                      <NewSeriesData>
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
                      </NewSeriesData>
                    </Link>
                  </>
                )
            )}
          </>
        )}
      </NewSeriesContainer>
    </>
  );
};
