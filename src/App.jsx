import Header from './components/Header/Header.jsx'
import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/Button/Button.jsx'
import Card from './components/Card/Card.jsx'

const App = () => {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
      const value = await res.json();
      console.log(value.data.tools);
      setData(value.data.tools);


    }
    loadData();
  }, [])


  return (
    <>
      <Header />
      <Button>Sort By Date</Button>
      <Card data={data}/>
      
    </>
  )
}

export default App
