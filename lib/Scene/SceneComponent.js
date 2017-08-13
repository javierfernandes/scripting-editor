import { Component, ContainerEditor } from 'substance'

class SceneComponent extends Component {
  render($$) {
    const { node, disabled, commands, textTypes } = this.props

    const el = $$('div')
      .addClass('sc-scene')
      .attr('data-id', node.id);

    el.append(
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

export default SceneComponent