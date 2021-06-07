import { useState } from 'react'

const NewMessageForm = ({ onSend }) => {
  const [inputText, setInputText] = useState('')

  const handleTextChange = event => {
    setInputText(event.target.value)
  }

  const handleSend = () => {
    onSend(inputText)
    setInputText('')
  }

  return (
    <div>
      <input
        value={inputText}
        onChange={handleTextChange}
        type='text'
        data-testid='messageText'
      />
      <button onClick={handleSend} data-testid='sendButton'>
        Send
      </button>
    </div>
  )
}

export default NewMessageForm
