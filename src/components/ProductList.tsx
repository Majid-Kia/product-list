"use client";

import React, { FC, useState } from "react";
import type { Products, Product } from "@/types/products";
import { Row, Col, Form } from "react-bootstrap";
import ProductCard from "@/components/ProductCard";

const ProductList: FC<{ products: Products }> = ({ products }) => {
  const [sort, setsort] = useState<string>("default");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sortProducts = (products: Products) => {
    switch (sort) {
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "rating-asc":
        return [...products].sort((a, b) => a.rating.rate - b.rating.rate);
      case "rating-desc":
        return [...products].sort((a, b) => b.rating.rate - a.rating.rate);
      default:
        return products;
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setsort(event.target.value);
  };

  const filterProducts = (products: Products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const sortedAndFilteredProducts = sortProducts(filterProducts(products));

  return (
    <>
      <Row>
        <Col xs={12} sm={4} className="d-flex">
          <Form.Group controlId="sortDropdown" className="mb-3 ">
            <Form.Label>Sort By:</Form.Label>
            <Form.Select value={sort} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="price-asc">Price Ascending</option>
              <option value="price-desc">Price Descending</option>
              <option value="rating-asc">Rating Ascending</option>
              <option value="rating-desc">Rating Descending</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} sm={8} className="d-flex">
          <Form.Group controlId="searchInput" className="mb-3">
            <Form.Label>Search:</Form.Label>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by title"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="gap-0 row-gap-3">
        {sortedAndFilteredProducts.map((product: Product) => (
          <Col xs={12} sm={6} md={4} key={product.id} className="">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default React.memo(ProductList);
