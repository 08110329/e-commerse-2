"use client";

import { title } from "process";
import { useRef, useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useHover } from "usehooks-ts";

export const Products = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const amounts = [
    {
      id: 1,
      img: "image 30.png",
      title: "Дан хүрэм пиджак",
      price: "750’000₮",
    },
    {
      id: 2,
      img: "image 94.png",
      title: "Ширээний чийдэн",
      price: "750’000₮",
    },
    {
      id: 3,
      img: "2 1.png",
      title: "Гадуур хүрэм",
      price: "750’000₮",
    },
    {
      id: 4,
      img: "image 29.png",
      title: "Дуу намсгагчтай чихэвч",
      price: "750’000₮",
    },
  ];
  const newProducts = [
    {
      id: 1,
      img: "22.png",
      title: "Canon камер",
      price: "750’000₮",
    },
    {
      id: 2,
      img: "image 1165.png",
      title: "Усан ягаан сандал",
      price: "750’000₮",
    },
    {
      id: 3,
      img: "image 1173.png",
      title: "Саарал сандал",
      price: "750’000₮",
    },
    {
      id: 4,
      img: "10011 1.png",
      title: "Laptop цүнх",
      price: "750’000₮",
    },
    {
      id: 5,
      img: "7.png",
      title: "Ухаалаг утас",
      price: "750’000₮",
    },
    {
      id: 6,
      img: "tsag.png",
      title: "Эрэгтэй ухаалаг утас",
      price: "750’000₮",
    },
    {
      id: 7,
      img: "purepng 1 (1).png",
      title: "Beats чихэвч",
      price: "750’000₮",
    },
    {
      id: 8,
      img: "image 1164.png",
      title: "Зөөлөвчэй ягаан сандал",
      price: "750’000₮",
    },
  ];
  const serviceAbouts = [
    {
      id: 1,
      img: "free-delivery 1.png",
      title: "Үнэгүй хүргэлт",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 2,
      img: "cashback 1.png",
      title: "Буцаан олголт",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 3,
      img: "premium-quality 1.png",
      title: "Найдвартай",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
      id: 4,
      img: "Group.png",
      title: "24/7 тусламж",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
  ];
  return (
    <div className="grid gap-10 pb-16">
      <div className="w-full h-fit grid gap-10">
        <h1 className="flex justify-center text-5xl font-extrabold pt-32">
          Онцлох бүтээгдэхүүн
        </h1>
        <div className="w-fit flex justify-center overflow-hidden m-auto">
          <div
            className="w-fit justify-center flex gap-x-14 mt-10"
            style={{
              transform: `translateX(-${(slideIndex * 100) / 4}%)`,
              transition: "transform 0.5s",
            }}
          >
            {amounts.map((amount) => {
              const Ref = useRef(null);
              const isHover = useHover(Ref);

              return (
                <div
                  className="w-[270px] h-[361px] flex flex-col items-center gap-6 pt-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] group relative"
                  key={amount.id}
                  ref={Ref}
                >
                  <img src={amount.img} className="w-[181px] h-[206px] " />
                  <div className="grid gap-3 realtive">
                    <p className="text-lg font-bold text-red-400 z-10 group-hover:text-white transition-transform duration-500">
                      {amount.title}
                    </p>
                    <span className="text-lg font-bold flex justify-center z-10 group-hover:text-white transition-transform duration-500">
                      {amount.price}
                    </span>
                    <div
                      className={`w-[270px] h-[361px] flex flex-col gap-36 absolute bottom-0 left-0 ${
                        isHover ? "translate-y-0" : "translate-y-96"
                      } duration-1000`}
                    >
                      <div className="flex text-xl font-semibold text-[#1389FF] gap-3 p-3 ">
                        <HiOutlineShoppingCart />
                        <CiHeart />
                        <CiSearch />
                      </div>
                      <div className="flex justify-center">
                        <button className="w-32 h-10 text-sm font-medium text-white bg-green-400 rounded-md">
                          Дэлгэрэнгүй
                        </button>
                      </div>
                    </div>
                    <div
                      className={`w-[270px] h-[120px] bg-blue-700 absolute bottom-0 left-0 ${
                        isHover ? "translate-y-0" : "translate-y-48"
                      } duration-1000`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex gap-4 bottom-14 left-[calc(50%-52px)] justify-center pt-8">
        <div
          className={`w-4 h-2 rounded-sm border border-red-400 ${
            slideIndex === 0 ? "bg-red-400" : " "
          }`} // slideindexiin utga n 0 bol baraan ugui bol saraal ongott bn
          onClick={() => {
            setSlideIndex(0);
          }}
        ></div>
        <div
          className={`w-4 h-2 rounded-sm border border-red-400 ${
            slideIndex === 1 ? "bg-red-400" : " "
          }`}
          onClick={() => {
            setSlideIndex(1);
          }}
        ></div>
        <div
          className={`w-4 h-2 rounded-sm border border-red-400 ${
            slideIndex === 2 ? "bg-red-400" : " "
          }`}
          onClick={() => {
            setSlideIndex(2);
          }}
        ></div>
        <div
          className={`w-4 h-2 rounded-sm border border-red-400 ${
            slideIndex === 3 ? "bg-red-400" : " "
          }`}
          onClick={() => {
            setSlideIndex(3);
          }}
        ></div>
      </div>
      <div className="w-full h-fit grid justify-center gap-10 ">
        <h1 className="flex justify-center text-5xl font-extrabold pt-16">
          Шинээр нэмэгдсэн
        </h1>
        <div className="w-full grid grid-cols-4  gap-14 justify-center pt-10">
          {newProducts.map((newProduct) => {
            const Ref = useRef(null);
            const isHover = useHover(Ref);
            return (
              <div
                className="w-[270px] h-[363px] flex flex-col items-center gap-6 "
                key={newProduct.id}
                ref={Ref}
              >
                <div
                  className={`w-[270px] h-[280px] hover:bg-slate-200 bg-[#F6F7FB] flex justify-center items-center `}
                >
                  <img
                    src={newProduct.img}
                    className="w-[169px] h-[158px]  mt-3"
                  />
                  <div className="w-[270px] h-[280px] border">
                    <HiOutlineShoppingCart className="text-base font-semibold" />
                    <CiHeart className="text-base font-semibold " />
                    <CiSearch className="text-base font-semibold" />
                  </div>
                </div>

                <div className="grid justify-center gap-3">
                  <p className="text-lg font-bold text-red-400">
                    {newProduct.title}
                  </p>
                  <div className="flex justify-center">
                    <GoDotFill className="text-[#DE9034]" />
                    <GoDotFill className="text-[#EC42A2]" />
                    <GoDotFill className="text-[#8568FF]" />
                  </div>
                  <span className="text-lg font-bold flex justify-center">
                    {newProduct.price}
                  </span>
                </div>
                <div />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-fit grid gap-10 ">
        <h1 className="flex justify-center text-5xl font-extrabold pt-32">
          Үйлчилгээний тухай
        </h1>
        <div className="w-full flex gap-9 justify-center">
          {serviceAbouts.map((serviceAbout) => {
            const Ref = useRef(null);
            return (
              <div
                className="w-[287px] h-[320px] flex flex-col items-center gap-6 pt-14 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
                key={serviceAbout.id}
                ref={Ref}
              >
                <img src={serviceAbout.img} className="w-[70px] h-[65px]" />
                <div className="grid justify-center gap-3">
                  <p className="text-lg font-bold flex justify-center">
                    {serviceAbout.title}
                  </p>
                  <p className="text-lg font-bold flex text-center text-[#8A8FB9]">
                    {serviceAbout.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
