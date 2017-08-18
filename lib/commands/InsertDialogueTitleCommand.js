import { TYPE_DIALOG_TITLE } from '../DialogueTitle/DialogueTitle'
import { InsertInlineNodeCommand } from 'substance'

export default class InsertDialogueTitleCommand extends InsertInlineNodeCommand {
  constructor(config) {
    super({ ...config, nodeType: 'TYPE_DIALOG_TITLE' })
  }

  createNodeData() {
    return {
      type: this.config.nodeType,
      content: 'Charanter_X'
    }
  }
}
