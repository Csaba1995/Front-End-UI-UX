import React from 'react'
import './article.css'

function Article({imgUrl, date, title}) {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="Blog" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <div>
                    <p>Read full Article</p>
                </div>
            </div>
            
        </div>
    )
}

export default Article
