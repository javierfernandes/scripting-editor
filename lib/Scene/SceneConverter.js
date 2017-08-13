export default {
  type: 'scene',
  tagName: 'div',
  matchElement: el => el.is('div[data-type="scene"]'),

  import: (el, node, converter) => {
    node.id = 'scene'
    node.nodes = el.getChildren().map(child => {
      var childNode = converter.convertElement(child)
      return childNode.id
    })
  },

  export: (node, el, converter) => {
    el
      .attr({ 'data-type': 'sceneHeading' })
      .append(converter.convertNodes(node.nodes))
  }
}
