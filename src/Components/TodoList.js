import React, { useState } from 'react';

const TodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  // const handleAdd = () => {
  //     if (text.trim()) { // Avoid adding empty tasks
  //       setList([...list, text]);
  //       setText("");
  //     }
  //   };

  const handleAdd = (() => {
    setList([...list, text]);
    setText("");
  })

  return (
    <div>
      <h1>Hello TodoList....</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd} >Add Item</button>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default TodoList;


