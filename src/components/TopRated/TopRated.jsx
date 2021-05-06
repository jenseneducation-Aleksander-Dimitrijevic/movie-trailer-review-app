import { Link } from "react-router-dom";
import {
  TopRatedContainer,
  TopRatedData,
  HiddenInfo,
} from "../TopRated/TopRatedStyled";

import { Carousel } from "react-responsive-carousel";
import { AiFillStar } from "react-icons/ai";

export const TopRated = ({ data }) => {
  return (
    <TopRatedContainer>
      {data && (
        <>
          <Carousel
            swipeable={true}
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            transitionTime={200}
            showIndicators={false}
            className="carousel"
          >
            {data.map((d, idx) =>
              idx <= 40 ? (
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `/show/${d?.name || d?.title}`,
                    data: {
                      d,
                    },
                  }}
                  key={d.id}
                >
                  <TopRatedData>
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
                </Link>
              ) : null
            )}
          </Carousel>
        </>
      )}
    </TopRatedContainer>
  );
};
