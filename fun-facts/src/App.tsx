import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [facts, setFacts] = useState("");
  const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";  

  useEffect(() => {

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setFacts(data.text);
      })
      .catch((error) => {
        console.log("Err : ", error);
      });
  }, []);

  return (
   <>
    <button onClick={() => setCount(count + 1)}>+</button>
    <h1>{count}</h1>

    {facts}
   </>
  )
}

export default App
