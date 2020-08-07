import React from 'react'
import Article from './Article'
import articles from '../data'

function App() {
    return (
        <div>
            <h1>App name</h1>
            <Article article={articles[0]} foo="bar" flag={true}/>
        </div>
    )
} 

export default App