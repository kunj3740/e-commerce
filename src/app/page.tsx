import Appbar from "@/components/Appbar";
import Carousel from "@/components/CarouselHome";
import HomePage from "@/components/Homepage";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="">
        <Appbar/>
      </div>
      <div className="-mt-10">
        <HomePage />
      </div>
    </div>
  );
}
