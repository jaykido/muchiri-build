import { Product } from "@/sanity.types";
import Link from "next/link";

function ProductThumb({ product }: { product: Product }) {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/products/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isOutOfStock ? "opacity-50" : ""}`}
    >
      {/* The content inside the Link, like an image or product title */}
      {isOutOfStock ? "Out of Stock" : "In Stock"}{" "}
      {/* Example of conditional content */}
    </Link>
  );
}

export default ProductThumb;
