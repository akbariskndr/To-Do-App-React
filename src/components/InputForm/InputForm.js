import React from 'react';
import { Form, Input, Button } from "antd";
import InputFormWrapper from './InputFormWrapper';

const { TextArea } = Input;

const InputForm = ({ title, description, submitHandler, titleChangeHandler, descriptionChangeHandler }) => {
  return (
    <InputFormWrapper>
      <h3>Create a new to do</h3>
      <Form.Item>
        <Input onChange={titleChangeHandler} value={title} placeholder="Title"/>
      </Form.Item>
      <Form.Item>
        <TextArea rows={4} onChange={descriptionChangeHandler} value={description} placeholder="Description"/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={submitHandler}>Create</Button>
      </Form.Item>
    </InputFormWrapper>
  )
};

export default InputForm;
