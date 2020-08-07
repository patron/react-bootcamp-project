import React from 'react'; 
import Article from './Article'

    
export default function ArticleList({articles}) {
    const articleElements = articles.map(article => 
        <li className='list-items-without-dots' key={article.id}><Article article={article}/></li>
    )
    return (
        <ul className="post-list">
            {articleElements}
        </ul>
    )
}