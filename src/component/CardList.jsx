import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './cardlist.css';

function CardList({ pairs }) {
  return (
    <Container>
      {pairs.map((pair, index) => (
        <Row className="m-4">
          <Col md="3" key={index}>
            <div className="pair-card">
              <div className="card p-5">
                <h3 className="h3">Base Info</h3>
                <div className="h-list">
                  <p>CreatedAt: {pair.pairCreatedAt}</p>
                  <p>dexId: {pair.dexId}</p>
                  <p>pairAddress: {pair.pairAddress}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3" key={index}>
            <div className="pair-card">
              <div className="card p-5">
                <h3 className="h3">Base Token</h3>
                <div className="h-list">
                  <p>Address: {pair.baseToken.address}</p>
                  <p>Name: {pair.baseToken.name}</p>
                  <p>Symbol: {pair.baseToken.symbol}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3" key={index}>
            <div className="pair-card">
              <div className="card p-5">
                <h3 className="h3">Quote Token</h3>
                <div className="h-list">
                  <p>Address: {pair.quoteToken.address}</p>
                  <p>Name: {pair.quoteToken.name}</p>
                  <p>Symbol: {pair.quoteToken.symbol}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md="3" key={index}>
            <div className="pair-card">
              <div className="card p-5">
                <h3 className="h3">Price</h3>
                <div className="h-list">
                  <p>Price Native: {pair.priceNative}</p>
                  <p>Price USD: {pair.priceUsd}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default CardList;
