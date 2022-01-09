import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((prod) => (
          <Col sm={12} md={6} lg={4}>
            <Product prod={prod} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
