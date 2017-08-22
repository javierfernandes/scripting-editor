import { Command } from 'substance'
import { selectTextContent } from './transactions'
import { dialogueTitle } from './factories'
import { Editor } from './utils/edition'

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
    const editor = new Editor(this._getEditorSession(params, context))
    
    // insert
    const id = editor.insert(dialogueTitle())
    // select
    editor.transaction(selectTextContent(id))
  }
}
