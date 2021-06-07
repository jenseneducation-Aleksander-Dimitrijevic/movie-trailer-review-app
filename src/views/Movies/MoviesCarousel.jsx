import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { LatestMoviesData } from "../../components/LatestMovies/LatestMoviesStyled";

import { AiFillStar } from "react-icons/ai";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const MoviesCarousel = ({ useQuery, showTrailerVisible }) => {
  const { error, data } = useQuery(["MoviesCarousel"], () =>
    fetch("/api/popular").then((res) => res.json())
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data && (
        <Carousel
          swipeable={true}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {data.map(
            (item, idx) =>
              idx <= 30 && (
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
                    </LatestMoviesData>
                  </Link>
                </>
              )
          )}
        </Carousel>
      )}
    </>
  );
};
