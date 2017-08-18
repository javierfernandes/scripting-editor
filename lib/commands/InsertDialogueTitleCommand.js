import { Command } from 'substance'
import { selectNodeContent } from './transactions'
import { createDialogueTitle } from './factories'

// TODO: remove this now that we have InsertDialogue
export default class InsertDialogueTitleCommand extends Command {
  
  getCommandState({ selection }) {
    return {
      disabled: !(selection && !selection.isNull() && !selection.isCustomSelection() && selection.containerId),
      active: false
    }
  }

  execute(params, context) {
    const { commandState } = params
    if (commandState.disabled) { return }
    const editorSession = this._getEditorSession(params, context)
    
    // insert
    const change = editorSession.transaction(tx => 
      tx.insertBlockNode(createDialogueTitle())
    )
    // select
    const createdId = Object.keys(change.created)[0]
    editorSession.transaction(selectNodeContent(createdId))
  }
}
