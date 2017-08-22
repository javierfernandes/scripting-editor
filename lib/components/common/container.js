import { Container } from 'substance'
import { nodeClass, textType, baseConverter } from './utils'

// node
export const node = nodeClass(Container)

// component

import { Component, ContainerEditor } from 'substance'

export const component = (type, subComponents=[]) => {
  const textTypes = subComponents.map(pakage => textType(pakage.name))

  return class extends Component {
    render($$) {
      const { node, disabled, commands } = this.props
      return $$('div')
        .addClass(type)
        .attr('data-id', node.id)
        .append(
          $$(ContainerEditor, {
            disabled,
            node,
            commands,
            textTypes
          }).ref(type)
      )
    }
  }
}

// converter

export const converter = (type, tagName = 'div') => ({
  ...baseConverter(type, tagName),

  import: (el, node, converter) => {
    // node.id = 'scene'
    node.nodes = el.getChildren().map(child => {
      var childNode = converter.convertElement(child)
      return childNode.id
    })
  },

  export: (node, el, converter) => {
    el.attr({ 'data-type': type })
      .append(converter.convertNodes(node.nodes))
  }
})

// package

export const container = (type, label=type, subPackages=[], defaultTextType) => ({
  name: type,
  defaultTextType,
  configure: config => {
    config.addNode(node(type))
    config.addComponent(type, component(type, subPackages))
    config.addConverter('html', converter(type))

    config.addLabel(type, label)
  }
})