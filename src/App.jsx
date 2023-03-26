import { nanoid } from 'nanoid';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Form from './Form';
import Items from './Items';

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added to the list');
  };
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item removed ');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
      <ToastContainer position='top-center' />
    </section>
  );
};
export default App;
