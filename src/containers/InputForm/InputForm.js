import React, { useState } from 'react';
import { InputForm } from "../../components/InputForm";

const InputFormContainer = ({ submitHandler }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  }

  const addTodoSubmitHandler = (event) => {
    setTitle('');
    setDescription('');
    submitHandler(title, description);
  }

  return (
    <InputForm 
      title={title}
      description={description}
      submitHandler={addTodoSubmitHandler}
      titleChangeHandler={titleChangeHandler}
      descriptionChangeHandler={descriptionChangeHandler}
    />
  )
};

export default InputFormContainer;
