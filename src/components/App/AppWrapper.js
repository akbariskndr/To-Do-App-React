import React from 'react';
import { Row, Col } from "antd";

const AppWrapper = ({ children }) => (
  <Row justify="center">
    <Col lg={12}>
      {children}
    </Col>
  </Row>
);

export default AppWrapper;