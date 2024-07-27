// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import { FC } from "react";
import { Product } from "@/types/products";
import { getProductDetail } from "@/services/productServices";
import ProductDetailModule from "@/components/ProductDetailModule";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail: FC<ProductDetailProps> = async ({ params }) => {
  const product = await getProductDetail(params.id);
  if (!product) {
    notFound();
  }
  return <ProductDetailModule product={product} />;
};

export default ProductDetail;
