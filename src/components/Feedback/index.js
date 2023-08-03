// Write your React code here.
import {Component} from 'react'

import './index.css'

const Emoji = props => {
  const {emoji, changeToLoveEmoji} = props
  const {imageUrl, name} = emoji
  console.log(name)

  const loveEmoji = () => {
    if (name === 'Happy') {
      changeToLoveEmoji()
    }
  }

  return (
    <li className="emoji-container">
      <div className="single-emoji">
        <button type="button">
          <img src={imageUrl} alt={name} onClick={loveEmoji} />
        </button>
        <p>{name}</p>
      </div>
    </li>
  )
}

class Feedback extends Component {
  state = {isClicked: true}

  changeToLoveEmoji = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const headingText = isClicked
      ? 'How satisfied are you with our customer support performance'
      : 'Thank You'

    return (
      <div className="bg-container">
        {isClicked ? (
          <div>
            <h1>{headingText}</h1>
            <ul className="emoji-container">
              {emojis.map(eachEmoji => (
                <Emoji
                  emoji={eachEmoji}
                  key={eachEmoji.id}
                  changeToLoveEmoji={this.changeToLoveEmoji}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="love-container">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>{headingText}</h1>
            <p>We will use your feedback yo improve</p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
