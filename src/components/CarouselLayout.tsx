"use client";

import { title } from "process";
import { useRef, useState } from "react";

export const CarouselLayout = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const layouts = [
    {
      id: 1,
      name: "Тав тухтай орчинг таны амьдралд",
      title: "2024 оны хамгийн шинэ загвар",
      description:
        "Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж ирж байна",
      img: "Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1@3x.png",
      image: "sofa promotional header(1).png",
    },
    {
      id: 1,
      name: "Тав тухтай орчинг таны амьдралд",
      title: "2024 оны хамгийн шинэ загвар",
      description:
        "Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж ирж байна",
      img: "Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1@3x.png",
      image: "sofa promotional header(1).png",
    },
    {
      id: 1,
      name: "Тав тухтай орчинг таны амьдралд",
      title: "2024 оны хамгийн шинэ загвар",
      description:
        "Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж ирж байна",
      img: "Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1@3x.png",
      image: "sofa promotional header(1).png",
    },
  ];
  return (
    <div className="w-screen h-[764px] overflow-hidden relative bg-[#F2F0FF] ">
      <div
        className="w-[300%] h-full flex [&>div]:text-5xl"
        style={{
          transform: `translateX(-${(slideIndex * 100) / 3}%)`,
          transition: "transform 0.5s",
        }}
      >
        {layouts.map((layout) => {
          const Ref = useRef(null);
          return (
            <div
              className="h-full flex-1 flex justify-center gap-44 items-center"
              key={layout.id}
              ref={Ref}
            >
              <div className="w-[480px] flex flex-col gap-7">
                <div className="flex flex-col gap-6">
                  <p className="text-base font-bold">{layout.name}</p>
                  <h1 className="font-extrabold text-6xl">{layout.title}</h1>
                  <p className="text-base font-bold">{layout.description}</p>
                </div>
                <button className="w-[163px] h-[50px] text-base font-bold text-white bg-red-400 rounded-md">
                  Дэлгэрэнгүй
                </button>
              </div>
              <div className="w-fit h-fit relative flex items-center justify-center left-52">
                <img
                  src={layout.img}
                  className="absolute z-10 w-[626px] h-[626px] "
                />
                <img src={layout.image} className="relative z-0" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute flex gap-4 bottom-14 left-[calc(50%-52px)]">
        <div
          className={`w-4 h-4 rounded-sm rotate-45 border border-red-400 ${
            slideIndex === 0 ? "bg-red-400" : " "
          }`} // slideindexiin utga n 0 bol baraan ugui bol saraal ongott bn
          onClick={() => {
            setSlideIndex(0);
          }}
        ></div>
        <div
          className={`w-4 h-4 rounded-sm rotate-45 border border-red-400 ${
            slideIndex === 1 ? "bg-red-400" : " "
          }`}
          onClick={() => {
            setSlideIndex(1);
          }}
        ></div>
        <div
          className={`w-4 h-4 rounded-sm rotate-45 border border-red-400 ${
            slideIndex === 2 ? "bg-red-400" : " "
          }`}
          onClick={() => {
            setSlideIndex(2);
          }}
        ></div>
      </div>
    </div>
  );
};
