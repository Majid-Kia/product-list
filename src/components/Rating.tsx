"use client";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number;
  totalStars?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, totalStars = 5 }) => {
  return (
    <div className="d-flex">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={18}
            className="star"
            color={starValue <= rating ? "#ffc107" : "#e4e5e9"}
          />
        );
      })}
    </div>
  );
};

export default Rating;
