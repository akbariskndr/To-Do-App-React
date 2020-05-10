import React from 'react';
import { Card, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import style from './Todo.module.less';

const TodoCard = ({ itemId, title, description, removeHandler, editHandler }) => {
  const deleteClickHandler = (event) => {
    removeHandler(itemId)
  };

  const editClickHandler = (event) => {
    editHandler(itemId)
  };

  return (
    <Card
      className={style.todoCard}
      title={title}
      actions={[
        <DeleteOutlined onClick={deleteClickHandler} key="delete"/>,
        <EditOutlined onClick={editClickHandler} key="edit"/>
      ]}
    >
      <Typography>{description}</Typography>
    </Card>
  )
};

export default TodoCard;
