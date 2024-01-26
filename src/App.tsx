import { useState } from 'react'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import { BrowserRouter } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <DefaultLayout />
    </BrowserRouter>
  );
}

export default App
