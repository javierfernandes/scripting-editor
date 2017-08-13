import Scene from './Scene'
import SceneConverter from './SceneConverter'
import SceneComponent from './SceneComponent'

export default {
  name: 'scene',
  configure: config => {
    config.addNode(Scene)
    config.addComponent(Scene.type, SceneComponent)
    config.addConverter('html', SceneConverter)
  }
}