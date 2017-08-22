import { types } from '../components/components'

// factory functions to create empty nodes (for autocomplete or commands)

export const dialogue = () => ({
  type: types.Dialogue,
  nodes: [
    dialogueTitle('CHARACTER'),
    dialogueText('LoremIpsum')
  ]
})

export const dialogueTitle = (content = 'CHARACTER') => ({
  type: types.DialogueTitle,
  content
})

export const dialogueText = (content = 'Lorem Ipsum') => ({
  type: types.DialogueText,
  content
})