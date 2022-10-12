import { useState } from 'react';
import './styles/global.css';

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <h1>Hello world</h1>
  )
}

