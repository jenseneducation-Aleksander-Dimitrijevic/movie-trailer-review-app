import { useState } from "react";
import ReviewFormContainer from "./ReviewFormStyles";

export default function ReviewForm() {
  const [review, setReview] = useState("");
  const handleReview = (e) => setReview(e.target.value);
  return (
    <ReviewFormContainer>
      <h1 className="review-form-title">Comments</h1>
      <input
        type="text"
        className="review-form-input"
        placeholder="Comment/tag a friend"
        value={review}
        onChange={handleReview}
      />
    </ReviewFormContainer>
  );
}
