import {
  BasePackage, StrongPackage, EmphasisPackage, LinkPackage, Document,
  ParagraphPackage, SwitchTextTypePackage, HeadingPackage, CodeblockPackage
} from 'substance'

import BodyPackage from '../body/BodyPackage'
import CommentPackage from '../comment/CommentPackage'
import SimpleHTMLImporter from './SimpleHTMLImporter'

import components from '../components/components'
import shortcuts from '../config/shortcuts'
import commands from '../config/commands'
import styles from '../config/styles'

/**
  We define a schema (simple-article) import some core packages
  from Substance, as well as custom node types.
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

    // custom nodes
    config.import(BodyPackage)
    config.import(CommentPackage, { toolGroup: 'annotations'} )

    // Override Importer/Exporter
    config.addImporter('html', SimpleHTMLImporter)

    styles(config)
    components(config)
    commands(config)
    shortcuts(config)
  }
}
