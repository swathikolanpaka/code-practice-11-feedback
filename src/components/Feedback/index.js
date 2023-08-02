// Write your React code here.
import {Component} from 'react'

import './index.css'

const Emoji = props => {
  const {emoji} = props
  const {imgUrl, name} = emoji

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

class Feedback extends Component {
  render() {
    const {resources} = this.props
    return (
      <div className="bg-container">
        <div className="small-container">
          <h1>How satisfied are you with our customer support performance</h1>
          <ul className="emoji-container">
            {resources.map(eachResource => (
              <Emoji emoji={eachResource} key={eachResource.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
