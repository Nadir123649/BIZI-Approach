import React from "react";
import { GameVideo, Plain } from "../utils";

const GameBanner = () => {
    return (
        <div className="relative w-full min-h-screen mt-[30px]">
            <video
                className="absolute top-0 left-0 w-full h-full object-contain -z-10"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={GameVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative bottom-0 flex flex-col items-end pb-[60px] pt-[20px] justify-end h-full text-center text-white min-h-screen px-[40px]">
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
