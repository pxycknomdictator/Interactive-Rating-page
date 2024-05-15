import React from "react";
import RatingCard from "./components/RatingCard.jsx";
import SubmitCard from "./components/SubmitCard.jsx";

const App = () => {
  return (
    <>
      <main className="w-screen h-screen grid place-items-center bg-mainBG">
        <RatingCard />
        {/* <SubmitCard /> */}
      </main>
    </>
  );
};

export default App;
