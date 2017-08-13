import SceneHeading from './SceneHeading'
import SceneHeadingComponent from './SceneHeadingComponent'
import SceneHeadingConverter from './SceneHeadingConverter'

export default {
  name: 'sceneHeading',
  configure: config => {
    config.addNode(SceneHeading)
    config.addComponent(SceneHeading.type, SceneHeadingComponent)
    config.addConverter('html', SceneHeadingConverter)
  }
}
