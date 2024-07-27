import { Container } from "react-bootstrap";
import { getProductsData } from "@/services/productServices";
import ProductList from "@/components/ProductList";

export default async function Home() {
  const products = await getProductsData();
  return (
    <Container className="py-5">
      <ProductList products={products} />
    </Container>
  );
}
