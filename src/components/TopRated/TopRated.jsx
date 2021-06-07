import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  TopRatedContainer,
  TopRatedData,
  HiddenInfo,
  SeeTrailerButtons,
  SeeTrailerButtonContainer,
} from "../TopRated/TopRatedStyled";

import { AiFillStar } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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

export const TopRated = ({ data, showTrailerVisible }) => {
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
              idx <= 11 && (
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
                    <TopRatedData>
                      <aside>
                        <img
                          className="hide-img-smaller"
                          src={`http://image.tmdb.org/t/p/w1280/${item?.backdrop_path}`}
                          alt={item?.poster_path || item?.backdrop_path}
                        />
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
                    </TopRatedData>
                  </Link>
                </>
              )
          )}
        </Carousel>
      )}
    </>
  );
};
