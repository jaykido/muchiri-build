import ProductsView from "@/components/ProductView";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {
  const products = await getAllProducts();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) + `>>> Rerendered the home page cache with ${products?.length} products and ${categories.length} categories`
  // )
  return (
    <div>
      <h1>Hello world</h1>

      <div>
        <ProductsView products={products} />
      </div>
    </div>
  );
}
