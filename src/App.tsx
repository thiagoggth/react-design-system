import { useState } from "react";
import "./styles/global.css";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="font-bold text-2xl text-violet-500">Hello world</h1>
      <button className="bg-cyan-500 font-medium px-3 py-2 rounded text-white hover:bg-cyan-300">Enviar</button>
    </>
  );
};
