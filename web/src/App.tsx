import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:9001/api")
      const data = await response.text()
      setData(data)
    }
    fetchData().catch((err) => console.log(err));
  }, [])

  return (
    <>
    {data}
    </>
  )
}

export default App
