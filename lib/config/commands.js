import { Tool } from 'substance'
import InsertDialogueTitleCommand from '../commands/InsertDialogueTitleCommand'

export default config => {
  // commands
  // config.addCommand('insert-dialogueTitle', InsertInlineNodeCommand, { nodeType: 'dialogue' })
  config.addCommand('insert-dialogueTitle', InsertDialogueTitleCommand, { commandGroup: 'insert-block-element' })


  // Tooling
  config.addToolGroup('insert-group')
  config.addTool('insert-dialogueTitle', Tool, { toolGroup: ['document', 'insert-group'] })
  config.addIcon('insert-dialogueTitle', { 'fontawesome': 'fa-hand-spock-o' })
  config.addLabel('insert-dialogueTitle', { en: 'Insert Dialogue' })

  // Toolbar
  config.addToolGroup('toolbar', [{
    name: 'insert',
    type: 'tool-dropdown',
    showDisabled: true,
    style: 'descriptive',
    commandGroups: ['insert-xref', 'insert-block-element']
  }])
}