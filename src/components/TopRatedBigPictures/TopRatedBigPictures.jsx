import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  TopRatedBigPicturesContainer,
  TopRatedBigPicturesContent,
  HeaderBigPictures,
  ImagesToprated,
  SeeTrailerButton,
} from "./TopRatedBigPicturesStyled";

import { AiFillStar } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { BsPlay } from "react-icons/bs";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const TopRatedBigPictures = ({ useQuery, showTrailerVisible }) => {
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
            {data.map((item, idx) =>
              idx <= 20 ? (
                <>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: "/",
                      state: { data: item },
                    }}
                  >
                    <SeeTrailerButton onClick={() => showTrailerVisible()}>
                      <span>
                        <BsPlay className="play-icon" /> Trailer
                      </span>
                    </SeeTrailerButton>
                  </Link>
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
                </>
              ) : null
            )}
          </Carousel>
        )}
      </>
    </>
  );
};
