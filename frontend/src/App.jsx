import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [result, setResult]=React.useState()
  const url = 'https://newsapi.org/v2/top-headlines?' +
             'category=technology&' +
             'country=hu&'+
             'apiKey=d59a33138bcf48838d1da340f68df050';

    const req = async()=>{
     const response = await axios.get(url)
      setResult(response)
    }
    console.log(result)
  return (
    <div>
      <button onClick={req}>get</button>
    </div>
  )
}

export default App;
