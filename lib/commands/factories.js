import { types } from '../components/components'

// factory functions to create empty nodes (for autocomplete or commands)

export const createDialogue = () => ({
  type: types.Dialogue,
})

export const createDialogueTitle = () => ({
  type: types.DialogueTitle,
  content: 'CHARACTER'
})

export const createDialogueText = () => ({
  type: types.DialogueText,
  content: 'Lorem Ipsum'
})