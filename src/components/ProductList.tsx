import React from "react";
import type { Products, Product } from "@/types/products";
import { Row, Col } from "react-bootstrap";
import ProductCard from "@/components/ProductCard";

export default function ProductList({ products }: { products: Products }) {
  return (
    <Row className="gap-0 row-gap-3">
      {products.map((product: Product) => (
        <Col xs={12} sm={6} md={4} key={product.id} className="">
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}
