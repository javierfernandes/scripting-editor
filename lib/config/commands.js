import { types } from '../components/components'
import InsertDialogueTitleCommand from '../commands/InsertDialogueTitleCommand'
import InsertDialogueCommand from '../commands/InsertDialogueCommand'

const insertCommands = {
  [types.Dialogue] : InsertDialogueCommand,
  [types.DialogueTitle] : InsertDialogueTitleCommand
}

export default config => {
  // commands
  Object.keys(insertCommands).forEach(type => {
    const id = insertId(type)
    config.addCommand(id, insertCommands[type])
    config.addLabel(id, { en: `Insert ${type}` })
  })
}

export const insertId = type => `insert-${type}`