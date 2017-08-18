import { Configurator, EditorSession } from 'substance'
import SimpleWriter from '../lib/simple-writer/SimpleWriter'
import SimpleWriterPackage from '../lib/simple-writer/SimpleWriterPackage'
import fixture from './fixture'

const cfg = new Configurator()
cfg.import(SimpleWriterPackage)

window.onload = function() {
  const importer = cfg.createImporter('html')
  const doc = importer.importDocument(fixture)
  
  const editorSession = new EditorSession(doc, { configurator: cfg })
  SimpleWriter.mount({ editorSession: editorSession }, document.body)
}
