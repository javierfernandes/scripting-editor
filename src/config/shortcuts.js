import { types }from '../components/components'
import { insertId } from './commands'

const shortcuts = {
  'cmd+y': insertId(types.DialogueTitle),
  'cmd+d': insertId(types.Dialogue)
}

export default config => {
  Object.keys(shortcuts).forEach(shortcut => {
    config.addKeyboardShortcut(shortcut, { command: shortcuts[shortcut] })
  })
}