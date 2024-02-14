import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9001/api");
      const data = await response.text();
      setData(data);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  return <><p>API Response: </p>{data}</>;
}

// Example additional component for /about route
function About() {
  return <div>About Page</div>;
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/viewer/about" element={<About />} />
      <Route path="/viewer/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
