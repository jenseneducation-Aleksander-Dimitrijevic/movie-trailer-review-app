import { Link } from "react-router-dom";
import {
  TopRatedContainer,
  TopRatedData,
  HiddenInfo,
} from "../TopRated/TopRatedStyled";

import { TopRatedCarousel } from "../TopRatedCarousel/TopRatedCarousel";

import { AiFillStar } from "react-icons/ai";

export const TopRated = ({ data }) => {
  return (
    <TopRatedContainer>
      <TopRatedCarousel data={data} AiFillStar={AiFillStar} Link={Link} />
      {data && (
        <>
          {data.map(
            (d, idx) =>
              idx <= 11 && (
                <TopRatedData key={d.id}>
                  <img
                    src={`http://image.tmdb.org/t/p/w1280/${d?.backdrop_path}`}
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
                          color: "yellow",
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
                </TopRatedData>
              )
          )}
        </>
      )}
    </TopRatedContainer>
  );
};
