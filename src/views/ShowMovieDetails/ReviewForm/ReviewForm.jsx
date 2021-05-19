import { useState } from "react";
import ReviewFormContainer from "./ReviewFormStyles";

export default function ReviewForm() {
  const [review, setReview] = useState("");
  const handleReview = () => {
    if (!sessionStorage.getItem("__user__")) {
      alert("You got to sign in to post a review.");
      return;
    }
  };
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!review) return;
    console.log("submitted");
  };
  return (
    <ReviewFormContainer onSubmit={handleReviewSubmit}>
      <h1 className="review-form-title">Comments</h1>
      <input
        type="text"
        className="review-form-input"
        placeholder="Comment/tag a friend"
        value={review}
        onClick={handleReview}
        onChange={(e) => setReview(e.target.value)}
      />
    </ReviewFormContainer>
  );
}
