import React from 'react';
import { Card, Row, Col } from "antd";
import style from './InputForm.module.less';

const InputFormWrapper = ({ children }) => (
  <Row gutter={[0, 20]}>
    <Col lg={24}>
      <Card className={style.card}>
        {children}
      </Card>
    </Col>
  </Row>
)

export default InputFormWrapper;