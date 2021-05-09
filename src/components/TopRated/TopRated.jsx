import { Link } from "react-router-dom";
import {
  TopRatedContainer,
  TopRatedData,
  HiddenInfo,
} from "../TopRated/TopRatedStyled";

import { AiFillStar } from "react-icons/ai";

export const TopRated = ({ data }) => {
  return (
    <TopRatedContainer>
      {data && (
        <>
          {data.map(
            (item, idx) =>
              idx <= 11 && (
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
                  <TopRatedData>
                    <img
                      className="hide-img-smaller"
                      src={`http://image.tmdb.org/t/p/w1280/${item?.backdrop_path}`}
                      alt={item?.poster_path || item?.backdrop_path}
                    />
                    <img
                      className="hide-img-bigger"
                      src={`http://image.tmdb.org/t/p/w1280/${item?.poster_path}`}
                      alt={item?.poster_path || item?.backdrop_path}
                    />
                    <aside>
                      <h5 className="title-text">
                        {item?.title || item?.name}
                      </h5>
                      <h5 className="release-text">
                        {item?.release_date.substr(0, 4) ||
                          item?.first_air_date.substr(0, 4)}
                      </h5>
                      <h5 className="rating-text">
                        <AiFillStar
                          style={{
                            color: "yellow",
                          }}
                        />{" "}
                        {item?.vote_average}
                      </h5>
                      {/* <HiddenInfo>
                  <h5 className="overview-text">
                    {item?.overview?.length > 200
                      ? item?.overview.substr(0, 200) + "..."
                      : item?.overview}
                  </h5>
                </HiddenInfo> */}
                    </aside>
                  </TopRatedData>
                </Link>
              )
          )}
        </>
      )}
    </TopRatedContainer>
  );
};
