"use client";
import React from "react";
import Card from "react-bootstrap/Card";
import type { Product } from "@/types/products";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./productCard.module.css";
import Rating from "./Rating";

export default function ProductCard({ product }: { product: Product }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { observe, unobserve, entries } = useIntersectionObserver({
    threshold: 0.1,
  });
  useEffect(() => {
    observe(cardRef.current);
    return () => {
      unobserve(cardRef.current);
    };
  }, [observe, unobserve]);

  useEffect(() => {
    const isIntersecting = entries.some(
      (entry) => entry.target === cardRef.current && entry.isIntersecting
    );
    if (isIntersecting) {
      setIsVisible(true);
      unobserve(cardRef.current);
    }
  }, [entries, unobserve]);
  return (
    <Card ref={cardRef}>
      {isVisible ? (
        <>
          <div className="d-flex justify-center p-4">
            <Image
              src={product.image}
              width={633}
              height={879}
              alt={product.category}
              className={`${styles.cardImage} m-auto`}
            ></Image>
          </div>
          <div className="px-4 py-3 d-flex flex-column ">
            <span className={styles.category}>{product.category}</span>
            <h3 className="h6 text-truncate mt-3">{product.title}</h3>
            <div className="d-flex  align-items-center">
              <Rating rating={product.rating.rate} />
              <span className="ml-4 text-black-50">
                ({product.rating.count} reviews)
              </span>
            </div>

            <span className="mt-2">${product.price}</span>
          </div>
        </>
      ) : (
        <div className="" style={{ height: "500px" }}>
          Loading...
        </div>
      )}
    </Card>
  );
}
