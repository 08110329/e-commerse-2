"use client";

import { useState } from "react";

export const CarouselLayout = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className="w-screen h-[764px] overflow-hidden relative border bg-[#F2F0FF]">
      <div
        className="w-[300%] h-full flex [&>div]:text-5xl"
        style={{
          transform: `translateX(-${(slideIndex * 100) / 3}%)`,
          transition: "transform 0.5s",
        }}
      >
        <div className="h-full flex-1 flex justify-center items-center">
          slide 1
        </div>
        <div className="h-full flex-1 flex justify-center items-center">
          slide 2
        </div>
        <div className="h-full flex-1 flex justify-center items-center">
          slide 3
        </div>
      </div>

      <div className="absolute flex gap-4 bottom-4 left-[calc(50%-52px)]">
        <div
          className={`w-6 h-6 rounded-md ${
            slideIndex === 0 ? "bg-slate-700" : "bg-slate-400"
          }`} // slideindexiin utga n 0 bol baraan ugui bol saraal ongott bn
          onClick={() => {
            setSlideIndex(0);
          }}
        ></div>
        <div
          className={`w-6 h-6 rounded-md ${
            slideIndex === 1 ? "bg-slate-700" : "bg-slate-400"
          }`}
          onClick={() => {
            setSlideIndex(1);
          }}
        ></div>
        <div
          className={`w-6 h-6 rounded-md ${
            slideIndex === 2 ? "bg-slate-700" : "bg-slate-400"
          }`}
          onClick={() => {
            setSlideIndex(2);
          }}
        ></div>
      </div>
    </div>
  );
};
