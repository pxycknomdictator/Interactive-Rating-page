import React, { useState } from "react";
import RatingCard from "./components/RatingCard.jsx";
import SubmitCard from "./components/SubmitCard.jsx";

const App = () => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState();

  return (
    <>
      <main className="w-screen h-screen grid transition-all place-items-center bg-mainBG">
        {!show ? (
          <RatingCard setRating={setRating} setShow={setShow} rating={rating} />
        ) : (
          <SubmitCard rating={rating} />
        )}
      </main>
    </>
  );
};

export default App;
