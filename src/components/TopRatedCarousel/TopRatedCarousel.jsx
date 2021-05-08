import { Carousel } from "react-responsive-carousel";
import { TopRatedData } from "../TopRated/TopRatedStyled";
import { TopRatedCarouselContainer } from "./TopRatedCarouselStyled";

export const TopRatedCarousel = ({ data, Link, AiFillStar }) => {
  return (
    <TopRatedCarouselContainer>
      <Carousel
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        transitionTime={200}
        showIndicators={false}
        className="carousel"
      >
        {data &&
          data.map((d, idx) =>
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
                  </aside>
                </TopRatedData>
              </Link>
            ) : null
          )}
      </Carousel>
    </TopRatedCarouselContainer>
  );
};
