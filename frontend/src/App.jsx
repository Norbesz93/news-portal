import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';
import Article from './Components/Article';

function App() {
  const [isPending, setIsPending] = React.useState(true)

  const [result, setResult]=React.useState()
  const url = 'https://newsapi.org/v2/top-headlines?' +
             'category=technology&' +
             'country=hu&'+
             'apiKey=c75e519a86484a9b830e5aa0e23071ee';

    const req = async()=>{
     const response = await axios.get(url)
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

        { !isPending && result.data.articles.map(article => 
          <div className="art">
            <Article article={article} key={article.title}/>
          </div>
        ) }

      </div>
      
    </div>
  )
}

export default App;
