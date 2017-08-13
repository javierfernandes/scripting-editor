import { TextBlock, AnnotationCommand, AnnotationTool } from 'substance'

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

// command

export const command = () => {
  return class extends AnnotationCommand {
    canFuse() { return false }
    canDelete() { return false }
  }
}

// package

export const createTextPackage = (type, label = type) => ({
  name: type,
  configure: (config, options) => {
    config.addNode(createTextNode(type))
    config.addComponent(type, component(type))
    config.addConverter('html', converter(type))
    
    config.addCommand(type, command(type), { nodeType: type })
    config.addTool(type, AnnotationTool, { toolGroup: options.toolGroup || 'annotations' })

    // Icons and labels
    // config.addIcon(type, { 'fontawesome': 'fa-comment'})
    config.addLabel(type, label)
  }
})