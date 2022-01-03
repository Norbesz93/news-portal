import React from 'react'

const Article = ({article}) => {
    return (
        <div className='article'>
            <img className='article-img' src={article.urlToImage} alt=" " />
            <h4>{article.title}</h4>
            <p className='description'>{article.description}</p>
            <p className='date'>{article.publishedAt.split("T")[0]}</p>
            <p className='source'>{article.source.name}</p>
        </div>
    )
}

export default Article
