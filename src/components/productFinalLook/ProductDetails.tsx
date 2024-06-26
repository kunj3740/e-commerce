import ProductBadge from "./ProductBadge";
import ProductRatings from "./ProductRatings";

interface ProductDetailsProps{
  product_name: string;
  product_category: string;
}

const ProductDetails = ( {product_name , product_category , }) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">
        {product_name}
      </div>
     
      <div className="text-xs xl:text-sm font-bold mb-1">
        {product_category}
      </div>
      <div>
        <ProductBadge badge="seller" />
      </div>
    </div>
  );
};

export default ProductDetails;