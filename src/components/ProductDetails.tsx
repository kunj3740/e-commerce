import ProductBadge from "./ProductBadge";
import ProductRatings from "./ProductRatings";


const ProductDetails = () => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">
        Genis Book Of World Record
      </div>
      <div className="text-sm xl:text-base mb-1">
        by <span className="text-blue-500">Gennis books</span>
      </div>
      { 
        <div className="text-sm xl:text-base mb-1">
          <ProductRatings
            avgRating={3}
            ratings={4}
          />
        </div>
      }
      <div className="text-xs xl:text-sm font-bold mb-1">
        Book
      </div>
      <div>
        <ProductBadge badge="seller" />
      </div>
    </div>
  );
};

export default ProductDetails;