import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewMessageForm from '../NewMessageForm'

describe('<NewMessageForm />', () => {
  let getByTestId

  describe('clique sur le bouton', () => {
    let sendHandler
    beforeEach(async () => {
      sendHandler = jest.fn().mockName('sendHandler')
      ;({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />))

      await userEvent.type(getByTestId('messageText'), 'New message')

      userEvent.click(getByTestId('sendButton'))
    })

    it('vide le input après le clique', () => {
      expect(getByTestId('messageText').value).toEqual('')
    })

    it('appelle la fonction', () => {
      expect(sendHandler).toHaveBeenCalledWith('New message')
    })
  })
})
