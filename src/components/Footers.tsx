import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Footers = () => {
  return (
    <div className="w-screen">
      <div className="h-[473px] bg-indigo-100 flex justify-center gap-24 p-24 ">
        <div className="w-[484px] flex flex-col gap-6 justify-start">
          <h2 className="text-4xl font-extrabold">eCommerce</h2>
          <div className="w-fit flex h-11 relative items-center">
            <input
              placeholder="  Имэйл хаяг"
              className="w-80 h-10 rounded-md relative bg-indigo-50 placeholder-[#8A8FB9]"
            ></input>
            <button className="bg-red-400 h-9 w-fit flex items-center rounded-md absolute px-6 right-0 text-white">
              Бүртгүүлэх
            </button>
          </div>
          <div className="w-fit text-base font-normal text-[#8A8FB9] flex flex-col gap-2">
            <p>Хаяг</p>
            <p>
              Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
              Гурван гол - 401 тоот
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-extrabold">Ангилал</h3>
          <ul className="text-base font-normal text-[#8A8FB9] flex flex-col gap-3">
            <li>Хувцас</li>
            <li>Камер, хэрэгсэл</li>
            <li>Ухаалаг утас, таблет</li>
            <li>Чихэвч</li>
            <li>Гэр ахуйн бараа</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-extrabold ">Бусад</h3>
          <ul className="text-base font-normal text-[#8A8FB9] flex flex-col gap-3">
            <li>Бидний тухай</li>
            <li>Холбоо барих</li>
            <li>Түгээмэл асуулт хариулт</li>
          </ul>
        </div>
      </div>
      <div className="h-[53px] border flex justify-around items-center bg-indigo-200">
        <p className="text-[#9DA0AE] text-base font-semibold">©ecommerce</p>
        <div className="flex gap-3">
          <FaFacebook />
          <RiInstagramFill />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};
