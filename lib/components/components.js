import SceneHeadingPackage from '../components/SceneHeading/SceneHeadingPackage'
import SceneDescriptionPackage from '../components/SceneDescription'
import DialogueTitlePackage from '../components/DialogueTitle'
import DialogueTextPackage from '../components/DialogueText'
import { container } from '../components/common/container'

export const types = {
  Dialogue: 'dialogue',
  DialogueTitle: DialogueTitlePackage.name,
  DialogueText: DialogueTextPackage.name,
  
  Scene: 'scene',
  SceneHeading: SceneHeadingPackage.name,
  SceneDescription: SceneDescriptionPackage.name,
}

export default config => {
  config.import(container(types.Dialogue, 'Dialogue', [DialogueTitlePackage, DialogueTextPackage], DialogueTextPackage.type))
  config.import(DialogueTextPackage)
  config.import(DialogueTitlePackage)
  config.import(SceneDescriptionPackage)
  config.import(SceneHeadingPackage)
  config.import(container(types.Scene, 'Scene'))
}