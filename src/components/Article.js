import React, {Component} from 'react'

class Article extends Component {
        state = {
            isOpen: true
        }
render() {
    const {article} = this.props
    const body = this.state.isOpen && <section>{article.text}</section>

    return (
        <div>
            <button onClick={this.handleClick}>close</button>
            <h2>{article.title}</h2>
            {body}
            <h3>creation date:{(new Date(article.date).toDateString())}</h3>
        </div>
    )
}
handleClick = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
}
}

export default Article