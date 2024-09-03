import { CarouselLayout } from "@/components/CarouselLayout";
import { Footers } from "@/components/Footers";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full m-auto h-[100vh]">
      <Header />
      {/* <CarouselLayout /> */}
      <Footers />
    </div>
  );
}
