"use client";

import { useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";

export const Products = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const amounts =[
    {
      img: "purepng 1.png",
      title: "Дуу намсгагчтай чихэвч",
      money: "750’000₮",
    },
    {
      img: "purepng 1.png",
      title: "Дуу намсгагчтай чихэвч",
      money: "750’000₮",
    },
    {
      img: "purepng 1.png",
      title: "Дуу намсгагчтай чихэвч",
      money: "750’000₮",
    },
    {
      img: "purepng 1.png",
      title: "Дуу намсгагчтай чихэвч",
      money: "750’000₮",
    }
  ];
  return (
    <div className="grid gap-10 pb-16">
      <div className="w-full h-fit grid gap-10"  >
      <h1 className="flex justify-center text-5xl font-extrabold pt-32">Онцлох бүтээгдэхүүн</h1>
      <div className="w-[1509px] flex gap-x-14 justify-center overflow-x-auto" style={{
          transform: `translateX(-${(slideIndex * 100) / 4}%)`,
          transition: "transform 0.5s",
        }}>
        {/* {amounts.map((amount, index) => (
          <amount key={index} img={amount.img} title={amount.title} money={amount.money}/>
        ))} */}
        <div className="w-[270px] h-[361px] border flex flex-col items-center gap-6 pt-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="purepng 1.png" className="w-[181px] h-[206px]"/>
          <div className="grid justify-center gap-3 ">
            <p className="text-lg font-bold text-red-400 ">Дуу намсгагчтай
            чихэвч</p>
            <span className="text-lg font-bold flex justify-center ">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] border flex flex-col items-center gap-6 pt-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="purepng 1.png" className="w-[181px] h-[206px]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] border flex flex-col items-center gap-6 pt-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="purepng 1.png" className="w-[181px] h-[206px]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] border flex flex-col items-center gap-6 pt-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="purepng 1.png" className="w-[181px] h-[206px]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-4 bottom-14 left-[calc(50%-52px)] justify-center">
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
      <div className="w-full h-fit grid gap-10 ">
      <h1 className="flex justify-center text-5xl font-extrabold pt-16">Шинээр нэмэгдсэн</h1>
      <div className="w-[1509px] flex gap-x-14 justify-center">
        <div className="w-[270px] h-[361px] flex flex-col items-center gap-6">
          <img src="image 1173.png" className="w-[270px] h-[280px] bg-[#F6F7FB] hover:bg-slate-200  "/>
          <div className="md:hidden hover:visible">
          <HiOutlineShoppingCart className="text-base font-semibold" />
          <CiHeart className="text-base font-semibold " />
          <CiSearch className="font-normal font-semibold" />
          </div>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <div className="flex justify-center">
            <GoDotFill className="text-[#DE9034]"/>
            <GoDotFill className="text-[#EC42A2]"/>
            <GoDotFill className="text-[#8568FF]"/>
            </div>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] flex flex-col items-center gap-6 ">
        <img src="image 1173.png" className="w-[270px] h-[280px] bg-[#F6F7FB]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <div className="flex justify-center">
            <GoDotFill className="text-[#DE9034]"/>
            <GoDotFill className="text-[#EC42A2]"/>
            <GoDotFill className="text-[#8568FF]"/>
            </div>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] flex flex-col items-center gap-6">
        <img src="image 1173.png" className="w-[270px] h-[280px] bg-[#F6F7FB]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <div className="flex justify-center">
            <GoDotFill className="text-[#DE9034]"/>
            <GoDotFill className="text-[#EC42A2]"/>
            <GoDotFill className="text-[#8568FF]"/>
            </div>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] flex flex-col items-center gap-6 ">
        <img src="image 1173.png" className="w-[270px] h-[280px] bg-[#F6F7FB]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <div className="flex justify-center">
            <GoDotFill className="text-[#DE9034]"/>
            <GoDotFill className="text-[#EC42A2]"/>
            <GoDotFill className="text-[#8568FF]"/>
            </div>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
      </div>
      <div className="w-[1509px] flex gap-x-14 justify-center">
        <div className="w-[270px] h-[361px] flex flex-col items-center gap-6 ">
        <img src="image 1173.png" className="w-[270px] h-[280px] bg-[#F6F7FB]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <div className="flex justify-center">
            <GoDotFill className="text-[#DE9034]"/>
            <GoDotFill className="text-[#EC42A2]"/>
            <GoDotFill className="text-[#8568FF]"/>
            </div>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] flex flex-col items-center gap-6 ">
        <img src="image 1173.png" className="w-[270px] h-[280px] bg-[#F6F7FB]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <div className="flex justify-center">
            <GoDotFill className="text-[#DE9034]"/>
            <GoDotFill className="text-[#EC42A2]"/>
            <GoDotFill className="text-[#8568FF]"/>
            </div>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] flex flex-col items-center gap-6 ">
        <img src="image 1173.png" className="w-[270px] h-[280px] bg-[#F6F7FB]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <div className="flex justify-center">
            <GoDotFill className="text-[#DE9034]"/>
            <GoDotFill className="text-[#EC42A2]"/>
            <GoDotFill className="text-[#8568FF]"/>
            </div>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
        <div className="w-[270px] h-[361px] flex flex-col items-center gap-6">
        <img src="image 1173.png" className="w-[270px] h-[280px] bg-[#F6F7FB]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold text-red-400">Дуу намсгагчтай
            чихэвч</p>
            <div className="flex justify-center">
            <GoDotFill className="text-[#DE9034]"/>
            <GoDotFill className="text-[#EC42A2]"/>
            <GoDotFill className="text-[#8568FF]"/>
            </div>
            <span className="text-lg font-bold flex justify-center">750’000₮</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-fit grid gap-10 ">
      <h1 className="flex justify-center text-5xl font-extrabold pt-32">Үйлчилгээний тухай</h1>
      <div className="w-[1509px] flex gap-7 justify-center">
        <div className="w-[287px] h-[320px] border flex flex-col items-center gap-6 pt-14 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="free-delivery 1.png" className="w-[70px] h-[65px]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold flex justify-center">Үнэгүй хүргэлт</p>
            <p className="text-lg font-bold flex text-center text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
        <div className="w-[287px] h-[320px] border flex flex-col items-center gap-6 pt-14 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="cashback 1.png" className="w-[70px] h-[65px]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold flex justify-center">Буцаан олголт</p>
            <p className="text-lg font-bold flex text-center text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
        <div className="w-[287px] h-[320px] border flex flex-col items-center gap-6 pt-14 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="premium-quality 1.png" className="w-[70px] h-[65px]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold flex justify-center">Найдвартай</p>
            <p className="text-lg font-bold flex text-center text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
        <div className="w-[287px] h-[320px] border flex flex-col items-center gap-6 pt-14 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <img src="Group.png" className="w-[70px] h-[65px]"/>
          <div className="grid justify-center gap-3">
            <p className="text-lg font-bold flex justify-center">24/7 тусламж</p>
            <p className="text-lg font-bold flex text-center text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
};
