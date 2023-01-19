import React from "react";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import {FormComponent} from "./components/FormComponent";

export const App = () => {
  return (
    <div className="Container app-container">
      <Row>
        <Col>
          {/* <h1>This is React Component Testing Tutorial</h1> */}
          <h2>I'm from the Team-A App</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormComponent data-testid="child" />
        </Col>
      </Row>
    </div>
  );
};
