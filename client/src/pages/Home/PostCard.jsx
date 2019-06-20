import React from 'react'
import { card } from './post-card.module.css'

class PostCard extends React.Component {
  render () {
    return <div className={card}>
      <h1> {this.props.title} </h1>
      <h2> {this.props.author} </h2>
      <p>
        {this.props.body}
      </p>
    </div>
  }
}

export default PostCard
