import React from "react";
import type { Products, Product } from "@/types/products";
import { Row } from "react-bootstrap";

export default function ProductList({ products }: { products: Products }) {
  return (
    <Row className="gap-0 row-gap-3">
      {products.map((product: Product) => (
        <div key={product.id}>product</div>
      ))}
    </Row>
  );
}
