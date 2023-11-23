// import React, { useState } from 'react';

// const Rating = ({ initialRating, onRatingChange }) => {
//   const [rating, setRating] = useState(initialRating);

//   const handleRatingClick = (newRating) => {
//     setRating(newRating);
//     onRatingChange(newRating);
//   };

//   return (
//     <div className="rating">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <span
//           key={star}
//           onClick={() => handleRatingClick(star)}
//           style={{
//             cursor: 'pointer',
//             color: star <= rating ? 'orange' : '',
//           }}
//         >
//           &#9733;
//         </span>
//       ))}
//     </div>
//   );
// };

// export default Rating;
