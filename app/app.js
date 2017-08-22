import { Configurator, EditorSession } from 'substance'
import ScriptingEditor from '../src/scripting-editor/ScriptingEditor'
import ScriptingEditorPackage from '../src/scripting-editor/ScriptingEditorPackage'
import fixture from './fixture'

const configurator = new Configurator()
configurator.import(ScriptingEditorPackage)

window.onload = function() {
  const importer = configurator.createImporter('html')
  const doc = importer.importDocument(fixture)
  
  const editorSession = new EditorSession(doc, { configurator })
  ScriptingEditor.mount({ editorSession }, document.body)
}
