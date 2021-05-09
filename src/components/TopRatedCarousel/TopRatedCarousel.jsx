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
          data.map((item, idx) =>
            idx <= 40 ? (
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
                    src={`http://image.tmdb.org/t/p/w1280/${item?.backdrop_path}`}
                    alt={item?.poster_path || item?.backdrop_path}
                  />
                  <aside>
                    <h5 className="title-text">{item?.title || item?.name}</h5>
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
                  </aside>
                </TopRatedData>
              </Link>
            ) : null
          )}
      </Carousel>
    </TopRatedCarouselContainer>
  );
};
