import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {

  const [data, setData] = useState();
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")

        if (!response.ok) {
          throw new Error("Request Failed")
        }
        const data = await response.json();
        // console.log(data)    
        setData(data);
      } catch (error) {
        console.error(error)
      }
    }

    fetchData();
  },[])

  return (
    <div className="App">
     <Table data={data}></Table>
    </div>
  );
}

export default App;
