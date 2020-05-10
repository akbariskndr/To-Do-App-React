import React from 'react';
import { Layout, Row, Col } from "antd";
import TodoCard from './TodoCard';

const { Content } = Layout;

const Todo = ({ items, removeHandler, editHandler }) => {
  const renderTodo = item => (
    <Col key={item.id} lg={12}>
      <TodoCard
        itemId={item.id}
        title={item.title}
        description={item.description}
        removeHandler={removeHandler}
        editHandler={editHandler}
      />
    </Col>
  );

  return (
    <Content style={{paddingTop: '1em'}}>
      <Row gutter={[15, 15]}>
        { items.map(renderTodo) }
      </Row>
    </Content>
  );
};

export default Todo;
