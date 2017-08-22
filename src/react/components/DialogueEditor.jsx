import React from 'react'
import Component, { $$ } from 'substance/ui/component'
import { Configurator, EditorSession } from 'substance'
import ScriptingEditor from '../../dialed/scripting-editor/ScriptingEditor'
import ScriptingEditorPackage from '../../dialed/scripting-editor/ScriptingEditorPackage'

import fixture from '../../../app/fixture'

export default class DialogueEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { contentEditor: undefined }
  }

  componentDidMount() {
    const container = this.refs.dialogueEditor
    container.innerHTML = ''
    
    const configurator = new Configurator()
    configurator.import(ScriptingEditorPackage)

    const importer = configurator.createImporter('html')
    // HARDCODED: starting with a default content from fixtures
    const doc = importer.importDocument(fixture)

    const editorSession = new EditorSession(doc, { configurator })
    const contentEditor = ScriptingEditor.mount({ editorSession }, container)
    this.setState({ contentEditor })
  }

  render() {
    return (
      <div className="dialogueEditor" ref="dialogueEditor">
        Loading editor...
      </div>
    )
  }
}