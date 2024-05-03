import { Carousel } from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";
import { CarouselStylesType } from "@material-tailwind/react";

type prevArrow = (args: {
  loop: boolean;
  handlePrev: () => void;
  activeIndex: number;
  firstIndex: boolean;
}) => React.ReactNode | void;


type nextArrow = (args: {
  loop: boolean;
  handleNext: () => void;
  activeIndex: number;
  lastIndex: boolean;
}) => React.ReactNode | void;

type navigation = (args: {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
  length: number;
}) => React.ReactNode | void;

export type Carousel = any;

export function CarouselHome() {
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="../images/product_9.jpg" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    </div>
  );
}
export default CarouselHome;