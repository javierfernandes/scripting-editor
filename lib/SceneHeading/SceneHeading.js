import { TextBlock } from 'substance'

export default class SceneHeading extends TextBlock {}

SceneHeading.define({
  type: 'sceneHeading',
  content: { type: 'string', default: '' }
})
