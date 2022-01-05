import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import Article from "./Components/Article";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [isPending, setIsPending] = React.useState(true);
  const [newsBlock, setNewsBlock] = React.useState([]);
  const [times, setTimes] = React.useState([])
  
  const req = async () => {
    const response = await axios.get(`http://localhost:8080/api/news`);
    setIsPending(false);
    setNewsBlock(response.data)
    const timesList = await response.data.map((article) => article.publishedAt)
    setTimes(timesList)
  };

  useEffect(() => {
    req();
  }, []);

  // console.log(result);


  const next = async () => {
    const response = await axios.post('http://localhost:8080/api/oldnews', {
      oldestNewsTime:newestNewsTime
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data[0].source)
    for (const news of response.data) {
      newsBlock.push(news)
    }
      setNewsBlock([...newsBlock]);
    
  };

  console.log(newsBlock);
  console.log(times)

  const sortedTimes = times.sort()
  const oldestNewsTime = sortedTimes[0]
  const newestNewsTime = sortedTimes.pop()
  console.log(oldestNewsTime)
  console.log(newestNewsTime)

  return (
    <div>
      <div className="navbar">
        <div className="menu-loader">
          <span className="slide-in-blurred-top"></span>
          <span className="slide-in-blurred-top"></span>
          <span className="slide-in-blurred-top"></span>
          <span className="slide-in-blurred-top"></span>
          <span className="slide-in-blurred-top"></span>
        </div>
      </div>

      <div className="content">

        {isPending && (
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <InfiniteScroll
          dataLength={newsBlock.length} //This is important field to render the next data
          next={next}
          hasMore={true}
          loader={
            <div className="scroll-loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          }
        >
          {newsBlock.length > 0 &&
            newsBlock.map((article) => (
              <div className="art">
                <Article article={article} key={article.title} />
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
