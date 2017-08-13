import {
  BasePackage, StrongPackage, EmphasisPackage, LinkPackage, Document,
  ParagraphPackage, SwitchTextTypePackage, HeadingPackage, CodeblockPackage
} from 'substance'

import BodyPackage from '../body/BodyPackage'
import CommentPackage from '../comment/CommentPackage'
import SimpleHTMLImporter from './SimpleHTMLImporter'
// scenes
import ScenePackage from '../Scene/ScenePackage'
import SceneHeadingPackage from '../SceneHeading/SceneHeadingPackage'
import SceneDescriptionPackage from '../SceneDescription/SceneDescription'
import DialogTitlePackage from '../DialogTitle/DialogTitle'
import DialogTextPackage from '../DialogText/DialogText'

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
    config.import(DialogTextPackage)
    config.import(DialogTitlePackage)
    config.import(SceneDescriptionPackage)
    config.import(SceneHeadingPackage)
    config.import(ScenePackage)

    // custom nodes
    config.import(BodyPackage)
    config.import(CommentPackage, { toolGroup: 'annotations'} )

    // Override Importer/Exporter
    config.addImporter('html', SimpleHTMLImporter)
  }
}
