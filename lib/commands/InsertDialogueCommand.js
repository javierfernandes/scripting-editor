import { Command } from 'substance'
import { createDialogue, createDialogueText, createDialogueTitle } from './factories'

export default class InsertDialogueCommand extends Command {
  
  getCommandState({ selection }) {
    return {
      disabled: !(selection && !selection.isNull() && !selection.isCustomSelection() && selection.containerId),
      active: false
    }
  }

  execute(params, context) {
    const { commandState } = params
    if (commandState.disabled) { return }
    
    this.insert(createDialogue(), params, context)
    this.insert(createDialogueTitle(), params, context)
    this.insert(createDialogueText(), params, context)
  }

  // utils

  insert(node, params, context) {
    const editorSession = this._getEditorSession(params, context)
    const change = editorSession.transaction(tx => tx.insertBlockNode(node))
    const createdId = Object.keys(change.created)[0]
    return createdId
  }
}
