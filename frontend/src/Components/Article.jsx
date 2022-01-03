import React from 'react'

const Article = ({article}) => {
    return (
        <div className='article'>
            <div className="main-data" style={{  
                backgroundImage: `url(${article.urlToImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="main-left">
                    <h4><a href={article.url} target="_blank" rel='noreferrer' className="title">{article.title}</a></h4>
                </div>
                <div className="main-right">

                </div>
            </div>
            <div className="details">
                <div className="meta">
                    <p className='source'>{article.source.name}</p>
                    <p className='date'>{article.publishedAt.split("T")[0]}</p>
                </div>
                <p className='description'>{article.description}</p>
                <a href={article.url} target="_blank" rel='noreferrer' className="link">Tovább...</a>
            </div>
            
            
        </div>
    )
}

export default Article
