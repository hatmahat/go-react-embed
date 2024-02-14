import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const BASE_URL = "http://localhost:9001";

interface User {
  name: string;
  age: number;
}

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL + "/api");
      const data = await response.text();
      setData(data);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p>API Response: </p>
      {data}
    </>
  );
}

function About() {
  return <div>About Page</div>;
}

function User() {
  const [data, setData] = useState<User>({
    name: "",
    age: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await fetch(BASE_URL + "/user");
      const data: User = await response.json();
      setData(data);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>
        My Name: <br /> <b>{data.name}</b>
      </p>
      <br />
      <p>
        My Age: <br /> <b>{data.age}</b>
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/viewer/about" element={<About />} />
        <Route path="/viewer/home" element={<Home />} />
        <Route path="/viewer/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
