import { CarouselLayout } from "@/components/CarouselLayout";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      <CarouselLayout />
      <Products/>
      <Footers />
    </div>
  );
}
