import React from 'react'
import ArticleList from './ArticleList'
import articles from '../data'

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3">App name</h1>
            </div>
            <ArticleList articles={articles}/>
        </div>
    )
} 

export default App