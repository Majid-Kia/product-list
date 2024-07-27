"use client";
import React from "react";
import { Product } from "@/types/products";
import { Card, Container } from "react-bootstrap";
import Image from "next/image";
import Rating from "./Rating";

function ProductDetailModule({ product }: { product: Product }) {
  return (
    <Container className="mt-4">
      <Card>
        <div className="d-flex justify-content-center p-4">
          <Image
            src={product.image}
            width={633}
            height={480}
            alt={product.category}
            className="m-auto"
            style={{ objectFit: "contain", maxHeight: "480px", width: "auto" }}
            layout="responsive"
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <div className="d-flex align-items-center mb-3">
            <Rating rating={product.rating.rate} />
            <span className="ml-4 text-black-50">
              ({product.rating.count} reviews)
            </span>
          </div>
          <h4 className="mt-2">${product.price}</h4>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetailModule;
