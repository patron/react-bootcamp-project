import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../data'

class App extends Component {
    
    state = {
        reverted: false
    }

    render() { 
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">App name
                    </h1>
                    <button className="btn btn-success" onClick = {this.revert}>Revert</button>
                </div>
                <ArticleList articles={this.state.reverted ? articles.reverse() : articles}/>
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
} 

export default App