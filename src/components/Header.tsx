import { BiMessageSquareDetail } from "react-icons/bi";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoCallOutline, IoPersonOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="w-screen h-[103px] grid">
      <div className="h-[44px] bg-indigo-500 flex items-center justify-around">
        <div className="flex gap-16">
          <div className="flex gap-3 items-center">
            <BiMessageSquareDetail className="text-base font-semibold text-slate-50" />
            <p className="text-base font-semibold text-slate-50">
              info@ecommerce.mn
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <IoCallOutline className="text-base font-semibold text-slate-50" />
            <p className="text-base font-semibold text-slate-50">77123456</p>
          </div>
        </div>
        <div className="w-fit h-[24px] flex justify-end gap-6 items-center">
          <div className="flex gap-2 items-center">
            <p className="text-base font-semibold text-slate-50">Нэвтрэх</p>
            <IoPersonOutline className="text-base font-semibold text-slate-50" />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-base font-semibold text-slate-50">Хадгалах</p>
            <CiHeart className="text-base font-semibold text-slate-50" />
          </div>
          <HiOutlineShoppingCart className="text-base font-semibold text-slate-50 " />
        </div>
      </div>
      <div className="">
        <div className="h-[40px] flex items-center justify-around ">
          <div className="flex gap-16">
            <h2 className="text-4xl text-[#0D0E43] font-bold">Ecommerce</h2>
            <div className="flex gap-6 items-center ">
              <div className="flex items-center gap-2">
                <p className="font-normal text-base">Нүүр</p>
                <FaArrowDown className="font-normal text-base" />
              </div>
              <p className="font-normal text-base">Ангилал</p>
            </div>
          </div>
          <div className="flex h-10 justify-end">
            <input className="w-80 border rounded-md relative	"></input>
            <button className="bg-red-400 h-10 w-14 flex justify-center items-center rounded-r-md absolute">
              <CiSearch className="font-normal text-2xl text-slate-50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
