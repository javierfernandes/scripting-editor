import { TextBlock } from 'substance'

// node

const NODE_STRING = { type: 'string', default: '' }
export const createTextNode = type => {
  const NodeClass = class extends TextBlock {}
  NodeClass.define({ type, content: NODE_STRING })
  return NodeClass
}

// component

import { TextBlockComponent } from 'substance'

export const component = type => {
  return class extends TextBlockComponent {
    render($$) {
      return super.render($$)
        .addClass(type)
    }
  }
}

// converter

export const converter = (type, tagName = 'div') => ({
  type,
  tagName,

  matchElement: el => el.is(`${tagName}[data-type="${type}"]`),
  import: (el, node) => {
    node.id = type
    node.content = el.innerHTML
  },

  export: (node, el) => {
    el.attr({ 'data-type': type })
      .append(node.content)
  }
})

// package

export const createTextPackage = type => ({
  name: type,
  configure: config => {
    config.addNode(createTextNode(type))
    config.addComponent(type, component(type))
    config.addConverter('html', converter(type))
  }
})
