import React, { useState } from 'react';
import { AppWrapper, AppHeader } from '../../components/App';
import { Todo } from '../../components/Todo';
import { InputFormContainer } from '../../containers/InputForm';
import generateRandomId from '../../utils/generateRandomId';

const initialItems = [
  {
    id: generateRandomId(),
    title: 'Make a hot tea',
    description: 'Drink a good tea to start the day',
    completed: false,
  },
  {
    id: generateRandomId(),
    title: 'Learn React',
    description: 'Learn the best Javascript UI library on the web',
    completed: false,
  },
  {
    id: generateRandomId(),
    title: 'Learn Express',
    description: 'Learn the backend side of the web',
    completed: false,
  },
];


const AppContainer = () => {
  const [items, setItems] = useState(initialItems);

  const submitHandler = (title, description) => {
    const newitems = [ 
      ...items,
      { id: generateRandomId(), title, description, completed: false } 
    ];

    setItems(newitems);
  };

  const removeTodoHandler = id => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  }

  return (
    <AppWrapper>
      <AppHeader/>
      <Todo 
        items={items}
        removeHandler={removeTodoHandler} 
        editHandler={(event) => null} 
      />
      <InputFormContainer
        submitHandler={submitHandler}
      />
    </AppWrapper>
  );
}

export default AppContainer;
