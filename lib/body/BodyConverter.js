export default {
  type: 'body',
  tagName: 'body',

  import: (el, node, converter) => {
    node.id = 'body'
    node.nodes = el.getChildren().map(child => {
      var childNode = converter.convertElement(child)
      return childNode.id
    })
  },

  export: (node, el, converter) => {
    el.append(converter.convertNodes(node.nodes))
  }
}
