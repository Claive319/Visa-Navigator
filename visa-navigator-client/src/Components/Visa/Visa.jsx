import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
import { PiClockCountdown } from "react-icons/pi";
import { VscServerProcess } from "react-icons/vsc";
import { Link } from "react-router-dom";

import Lottie, { useLottie } from "lottie-react";
import "../../assets/Animation - 1734382115606.json";
import animation from "./Animation.json";

const Visa = ({ vissa, handleDeltebtn }) => {
  const {
    country,
    visa,
    processTime,
    reqdDocuments,
    explain,
    userAge,
    userFee,
    visaExpDuration,
    agree,
    applicationMethod,
    _id,
  } = vissa;
  const bin = {
    animationData: { animation },
    loop: true,
  };
  const { View } = useLottie(bin);
  return (
    <div className="card card-compact bg-white/30  backdrop-blur-sm w-96 shadow-xl transition duration-7000 hover:scale-110 hover:shadow-2xl">
      <figure className="p-12">
        <img className="rounded-2xl" src={country} alt="" />
      </figure>
      <div className="card-body ">
        <h1 className="text-center font-black  text-[#131313] text-5xl">
          {vissa.visa}
        </h1>
        <p className="text-[#131313B3] text-start md:flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          Reason For Applying For Visa :
          <span className="font-bold ">{explain}</span>
        </p>
        <p className="text-[#131313B3] text-start md:flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          Age : {userAge}
        </p>
        <p className="text-[#131313B3]  md:flex ml-1 gap-4">
          <FiDollarSign />
          Paid Fee by User : {userFee}
        </p>
        <p className="text-[#131313B3]  md:flex ml-1 gap-4">
          <PiClockCountdown />
          Visa will be expired after :{" "}
          <span className=" font-bold">{visaExpDuration}</span>
        </p>
        <p className="text-[#131313B3]  md:flex items-center ml-1 gap-2">
          <AiOutlineLike />
          User Has Completed the Visa Application procedures :{" "}
          <span className=" font-bold">{agree}</span>
        </p>
        <p className="text-[#131313B3]  md:flex items-center ml-1 gap-2">
          <VscServerProcess />
          Recent Application Application Method done :{" "}
          <span className=" font-bold">{applicationMethod}</span>
        </p>
        <div className="flex mx-auto space-x-4">
          <Link to={`/visa-app/${vissa._id}`}>
            <button className="btn btn-outline btn-warning">
              Update information
            </button>
          </Link>

          <button onClick={() => handleDeltebtn(_id)} className="btn btn-ghost flex items-center align-middle mx-auto ">
            <Lottie className="w-10" animationData={animation} />
            {/* <Lottie loop={true} animationData={Animation - 1734382115606}></Lottie> */}
            {/* <RiDeleteBin6Line /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Visa;
