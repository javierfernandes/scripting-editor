import { Command } from 'substance'
import { dialogue } from './factories'
import { Editor } from './utils/edition'
import { selectContainerNode } from './transactions'

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

    const editor = new Editor(this._getEditorSession(params, context))

    const id = editor.insert(dialogue())
    editor.transaction(selectContainerNode(id))
  }

}

