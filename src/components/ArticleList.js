import React from 'react'; 
import Article from './Article'

    
export default function ArticleList({articles}) {
    const articleElements = articles.map((article, index) =>
        <li className='list-items-without-dots' key={article.id}><Article article={article}  defaultOpen = {index === 0}/></li>
    )
    return (
        <ul className="post-list">
            {articleElements}
        </ul>
    )
}