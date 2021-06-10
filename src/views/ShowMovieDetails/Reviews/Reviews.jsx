import { useEffect, useState } from "react";
import ReviewsContainer from "./ReviewStyles";
import placeholder from "../../../assets/portrait/placeholder.png";
import moment from "moment";

export default function Reviews({ movieID }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    const fetchReviews = async () => {
      const resp = await fetch("/api/reviews");
      const data = await resp.json();
      isSubscribed && setReviews(data);
    };
    isSubscribed && fetchReviews();
    return () => {
      isSubscribed = false;
    };
  }, [reviews]);

  return (
    <ReviewsContainer>
      {reviews.length
        ? reviews.map(
            (item) =>
              movieID === parseInt(item.movieID) && (
                <div className="review" key={item._id}>
                  <img
                    src={placeholder}
                    alt="thumbnail"
                    className="review-thumbnail"
                  />
                  <div className="review-content">
                    <h1 className="review-title">{item.fullName}</h1>
                    <p className="review-text">{item.review}</p>
                    <p className="review-createdAt">
                      {moment(item.createdAt).format("MMM DD h:mm A")}
                    </p>
                  </div>
                </div>
              )
          )
        : null}
    </ReviewsContainer>
  );
}
