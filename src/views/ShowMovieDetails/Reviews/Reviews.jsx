import { useEffect, useState } from "react";
import ReviewsContainer from "./ReviewStyles";
import placeholder from "../../../assets/portrait/placeholder.png";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const resp = await fetch("/api/reviews");
      const data = await resp.json();
      setReviews(data);
    };
    fetchReviews();
  }, []);
  return (
    <ReviewsContainer>
      {reviews.length &&
        reviews.map((item) => (
          <div className="review">
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
        ))}
    </ReviewsContainer>
  );
}
