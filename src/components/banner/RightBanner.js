import React from 'react'
import { bannerImg, newRb } from "../../assets/index";
import  {teba} from "../../assets/index";
import { teba3 } from '../../assets/index';
import { mio } from '../../assets/index';
const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[350px] h-[330px] lgl:w-[550px] lgl:h-[600px] z-10"
        src={newRb}
        alt="my Photo"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner