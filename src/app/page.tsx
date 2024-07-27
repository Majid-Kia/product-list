import { Container } from "react-bootstrap";
import { getProductsData } from "@/services/productServices";

export default async function Home() {
  const products = await getProductsData();
  return <Container className="py-5"></Container>;
}
