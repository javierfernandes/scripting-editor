import InsertDialogueTitleCommand from '../commands/InsertDialogueTitleCommand'

export default config => {
  // commands
  config.addCommand('insert-dialogueTitle', InsertDialogueTitleCommand, { commandGroup: 'insert-block-element' })
  config.addLabel('insert-dialogueTitle', { en: 'Insert Dialogue' })
}