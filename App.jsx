import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {

  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);

  const change = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    setListItem((oldItems) => {
      return [...oldItems, item];
    }
    );
    setItem("");
  };

  const deleteItems = (id) => {
    setListItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return (
          index !== id
        );
      });
    });
  };

  return (
    <>
      <h2 className='heading'>To Do List by <a href='https://www.linkedin.com/in/error200/' target="_blank">Subigya Subedi</a></h2>
      <div className="main_div">

        <div className="center_div">

          <br />
          <h1>ToDo List</h1>
          <br />

          <input
            type='text'
            placeholder='Add Item'
            onChange={change}
            value={item}
          />

          <button onClick={addItem}> + </button>

          <ol>
            {listItem.map((itemVal, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>

        </div>

      </div>
    </>
  );
}

export default App;