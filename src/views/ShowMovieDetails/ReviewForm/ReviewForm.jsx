import { useState, useRef } from "react";
import ReviewFormContainer from "./ReviewFormStyles";

export default function ReviewForm({ setSignup, setShow }) {
  const [review, setReview] = useState("");
  const inputRef = useRef();

  const handleReview = () => {
    if (!sessionStorage.getItem("__user__")) {
      inputRef.current.blur();
      setSignup(true);
      setShow(true);
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
        ref={inputRef}
        onClick={handleReview}
        onChange={(e) => setReview(e.target.value)}
      />
    </ReviewFormContainer>
  );
}
