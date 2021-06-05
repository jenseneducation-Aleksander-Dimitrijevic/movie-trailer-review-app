import { HeaderNewSeries } from "./NewSeriesStyled";
import { NewSeriesCarousel } from "./NewSeriesCarousel";

import { BsFilm } from "react-icons/bs";

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
      <NewSeriesCarousel data={data} showTrailerVisible={showTrailerVisible} />
    </>
  );
};
