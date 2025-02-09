import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/albums");
    setData(result.data)
    console.log('Api Response:', result.data);


  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div>
      <h1>Hello apidata...</h1>
      {data
        .filter((item) => item.id >= 15 && item.id <= 35)
        .map((item) => (
          <ul key={item.id}>
            <li>
              <p>ID: {item.id}</p>
            </li>
            <li>
              <p>Title: {item.title}</p>
            </li>
          </ul>
        ))}
    </div>

  );
}

export default FetchData;
