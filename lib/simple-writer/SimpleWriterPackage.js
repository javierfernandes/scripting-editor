import {
  BasePackage, StrongPackage, EmphasisPackage, LinkPackage, Document,
  ParagraphPackage, SwitchTextTypePackage, HeadingPackage, CodeblockPackage, Tool
} from 'substance'

import BodyPackage from '../body/BodyPackage'
import CommentPackage from '../comment/CommentPackage'
import SimpleHTMLImporter from './SimpleHTMLImporter'
// scenes
import SceneHeadingPackage from '../components/SceneHeading/SceneHeadingPackage'
import SceneDescriptionPackage from '../components/SceneDescription'
import DialogueTitlePackage from '../components/DialogueTitle'
import DialogueTextPackage from '../components/DialogueText'
import { container } from '../components/common/container'

import InsertDialogueTitleCommand from '../commands/InsertDialogueTitleCommand'

/**
  Standard configuration for SimpleWriter
  We define a schema (simple-article) import some core packages
  from Substance, as well as custom node types.
  An HTML importer is registered to be able to turn HTML markup
  into a SimpleArticle instance.
*/
export default {
  name: 'simple-writer',
  configure: config => {
    config.defineSchema({
      name: 'simple-article',
      ArticleClass: Document,
      defaultTextType: 'paragraph'
    })

    // BasePackage provides core functionaliy, such as undo/redo
    // and the SwitchTextTypeTool. However, you could import those
    // functionalities individually if you need more control
    config.import(BasePackage)
    config.import(SwitchTextTypePackage)
    // core nodes
    config.import(ParagraphPackage)
    config.import(HeadingPackage)
    config.import(CodeblockPackage)
    config.import(StrongPackage, { toolGroup: 'annotations' })
    config.import(EmphasisPackage, { toolGroup: 'annotations' })
    config.import(LinkPackage, { toolGroup: 'annotations' })

    // scenes
    config.import(container('dialogue', 'Dialogue', [DialogueTitlePackage, DialogueTextPackage], DialogueTextPackage.type))
    config.import(DialogueTextPackage)
    config.import(DialogueTitlePackage)
    config.import(SceneDescriptionPackage)
    config.import(SceneHeadingPackage)
    config.import(container('scene', 'Scene'))

    // custom nodes
    config.import(BodyPackage)
    config.import(CommentPackage, { toolGroup: 'annotations'} )

    // Override Importer/Exporter
    config.addImporter('html', SimpleHTMLImporter)

    // Commands & Tooling
    config.addToolGroup('insert-group')
    // config.addCommand('insert-dialogueTitle', InsertInlineNodeCommand, { nodeType: 'dialogue' })
    config.addCommand('insert-dialogueTitle', InsertDialogueTitleCommand, { commandGroup: 'insert-block-element' })
    config.addTool('insert-dialogueTitle', Tool, { toolGroup: ['document', 'insert-group'] })
    config.addIcon('insert-dialogueTitle', { 'fontawesome': 'fa-undo' })
    config.addLabel('insert-dialogueTitle', { en: 'Insert Dialogue' })

    // Toolbar
    config.addToolGroup('toolbar', [{
      name: 'insert',
      type: 'tool-dropdown',
      showDisabled: true,
      style: 'descriptive',
      commandGroups: ['insert-xref', 'insert-block-element']
    }])

    config.addKeyboardShortcut('cmd+z', { command: 'undo' });
  }
}
