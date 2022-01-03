import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import Article from './Components/Article';

function App() {
  const [isPending, setIsPending] = React.useState(true)

  const [result, setResult]=React.useState()
    const req = async()=>{
     const response = await axios.get(`http://localhost:8080/api/news`)
      setResult(response)
      setIsPending(false)
    }

    useEffect( () => {req()}, [])

    console.log(result)


  return (
    <div>
      <div className='navbar'>
        <div className="menu-loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>


      <div className="content">

        { isPending && 
          <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        }

        { !isPending && result.data.map(article => 
          <div className="art">
            <Article article={article} key={article.title}/>
          </div>
        ) }

      </div>
      
    </div>
  )
}

export default App;
