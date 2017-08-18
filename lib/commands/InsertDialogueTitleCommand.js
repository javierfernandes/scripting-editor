import { TYPE_DIALOG_TITLE } from '../components/DialogueTitle'
import { Command } from 'substance'

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
      tx.insertBlockNode(this.createNodeData(tx, params, context))
    )
    // select
    editorSession.transaction(tx => {
      const createdId = Object.keys(change.created)[0]
      const createdNode = tx.get(createdId)
      tx.setSelection({
        type: 'property',
        path: createdNode.getPath(),
        startOffset: 0,
        endOffset: createdNode.content.length
      })
    })
  }

  createNodeData() {
    return {
      type: TYPE_DIALOG_TITLE,
      content: 'Character'
    }
  }
}
