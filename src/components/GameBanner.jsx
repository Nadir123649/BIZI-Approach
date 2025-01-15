import React from "react";
import { GameVideo, Plain } from "../utils";
import { gameBanner } from "../utils";

const GameBanner = () => {
    return (
        <div className="relative w-full min-h-[60vh] md:min-h-[100vh] mt-[0px] md:mt-[30px]">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 hidden md:block"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={GameVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src={gameBanner} alt="gamebanner" className="block md:hidden min-h-[60vh]" />

            <div className="relative bottom-[40px] md:bottom-[0px] md:flex flex-col items-end  pb-[10px] md:pb-[60px] mt-[-80px] md:mt-[0px] md:pt-[20px] justify-end h-full text-center text-white min-h-[10vh] md:min-h-[100vh] px-[10px] md:px-[40px] ">
                <button className="bg-bggg max-w-[462px] h-[95px] w-full text-[24px] font-[400] text-[#1C1F25] leading-normal capitalize flex gap-[6px] items-center justify-center">
                    <span>
                        Go To Telegram
                    </span>
                    <img src={Plain} alt="plain" />
                </button>
            </div>

        </div>
    );
};

export default GameBanner;
