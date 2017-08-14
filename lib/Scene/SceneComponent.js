import { Component, ContainerEditor } from 'substance'
import SceneHeading from '../SceneHeading/SceneHeadingPackage'
import SceneDescription from '../SceneDescription/SceneDescription'
import DialogueText from '../DialogueText/DialogueText'
import DialogueTitle from '../DialogueTitle/DialogueTitle'

const textType = (type, name = type) => ({ name, data: { type }})

const textTypes = [
  SceneHeading,
  SceneDescription,
  DialogueTitle,
  DialogueText
].map(pakage => textType(pakage.name))


export default class SceneComponent extends Component {
  render($$) {
    const { node, disabled, commands } = this.props

    const el = $$('div')
      .addClass('scene')
      .attr('data-id', node.id)
      .append(
        $$(ContainerEditor, {
          disabled,
          node,
          commands,
          textTypes
        }).ref('scene')
    )
    return el
  }
}