import React from "react";
import star from "../../public/images/icon-star.svg";

const RatingCard = () => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="bg-cardBG w-[350px] sm:w-[400px] rounded-[2rem] p-[1.7rem]">
      <div className="bg-activecircleBG bg-opacity-10 cursor-pointer w-12 h-12 grid place-items-center rounded-full">
        <img src={star} alt="star" />
      </div>
      <h1 className="mt-9 text-white font-semibold text-3xl">How did we do?</h1>
      <article className="my-6 font-semibold text-description">
        Please let us knwo how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </article>
      <div className="flex justify-between items-center mb-8">
        {ratings.map((numbers, index) => (
          <span
            key={index}
            className="w-12 h-12 grid place-items-center rounded-full text-description text-LightGrey bg-cricleBG hover:bg-Orange hover:text-white transition-all cursor-pointer active:bg-activecircleBG"
          >
            {numbers}
          </span>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <input
          type="submit"
          className="w-[88%] rounded-full text-white bg-Orange py-2 font-semibold hover:bg-white hover:text-Orange transition-all cursor-pointer"
          value="SUBMIT"
        />
      </div>
    </div>
  );
};

export default RatingCard;
