import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";
import Article from "./Components/Article";
import InfiniteScroll from "react-infinite-scroll-component";
import Landing from "./Components/Landing";

function App() {
  const [isPending, setIsPending] = React.useState(true);
  const [auth, setAuth] = React.useState(true);
  const [newsBlock, setNewsBlock] = React.useState([]);
  const [times, setTimes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState( 
    <div className="scroll-loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
  
  const req = async () => {
    const response = await axios.get(`http://localhost:8080/api/news`,{headers:{key: localStorage.getItem('data')}});
    setIsPending(false);
    if (response.data.key){
      localStorage.setItem('data', response.data.key)
    }else{
    setAuth(false)  
    setNewsBlock(response.data)
    const timesList = await response.data.map((article) => article.publishedAt)
    setTimes(timesList)
  }};

  useEffect(() => {
    req();
  }, []);

  // console.log(result);


  const next = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/oldnews', {
        oldestNewsTime: oldestNewsTime
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const newArray = []
      for (const res of response.data) {
        let counter = 0
        for (const news of newsBlock) {
          if (res.title === news.title) {
            counter = counter +1
            break
          }

        }
        if(counter === 0 ){
        newArray.push(res)
      }
      }
      for (const newsWithoutDuplicated of newArray) {
        newsBlock.push(newsWithoutDuplicated)
      }

      setNewsBlock([...newsBlock]);
      const timesList = await response.data.map((article) => article.publishedAt)
      setTimes(timesList)
    } catch (error) {
      setIsLoading(
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      )
    }


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
        {auth ?
        <div className="landingcontent">
          <Landing/>
        </div>
        :
        <div className="newscontent">
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
            loader={isLoading}
          >
            {newsBlock.length > 0 &&
              newsBlock.map((article) => (
                <div className="art">
                  <Article article={article} key={article.title} />
                </div>
              ))}
          </InfiniteScroll>
        </div>
}
      </div>
    </div>
  );
}

export default App;
