import { useEffect, useState } from "react";
import ReviewsContainer from "./ReviewStyles";
import placeholder from "../../../assets/portrait/placeholder.png";

export default function Reviews({ movieID }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    const fetchReviews = async () => {
      const resp = await fetch("/api/reviews");
      const data = await resp.json();
      isSubscribed && setReviews(data);
    };
    fetchReviews();
    return () => {
      isSubscribed = false;
    };
  }, [reviews]);

  return (
    <ReviewsContainer>
      {reviews.length
        ? reviews.map(
            (item) =>
              movieID === item.movieID && (
                <div className="review" key={item._id}>
                  <img
                    src={placeholder}
                    alt="thumbnail"
                    className="review-thumbnail"
                  />
                  <div className="review-content">
                    <h1 className="review-title">{item.fullName}</h1>
                    <p className="review-text">{item.review}</p>
                    <p className="review-createdAt">{item.createdAt}</p>
                  </div>
                </div>
              )
          )
        : null}
    </ReviewsContainer>
  );
}
