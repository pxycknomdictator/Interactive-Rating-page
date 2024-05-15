import React from "react";
import mobileIMG from "../../public/images/illustration-thank-you.svg";

const SubmitCard = () => {
  return (
    <div className="bg-cardBG w-[350px] sm:w-[400px] rounded-[2rem] py-[2.4rem] px-[1.5rem]">
      <div className="cursor-pointer grid place-items-center rounded-full">
        <img src={mobileIMG} alt="mobileimage" />
      </div>
      <div className="text-center grid place-items-center">
        <p className="cursor-pointer py-1 px-10 rounded-full my-[2rem] bg-cricleBG text-Orange">
          You Select 4 out of 5
        </p>
      </div>
      <h1 className="text-white font-semibold text-3xl text-center">
        Thank you!
      </h1>
      <article className="my-6 font-semibold text-description text-center">
        We appreciate you taking the time to give a rating if you ever need more
        support, don't hesitate to get in touch!
      </article>
    </div>
  );
};

export default SubmitCard;
