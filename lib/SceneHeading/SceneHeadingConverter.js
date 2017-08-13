export default {
  type: 'sceneHeading',
  tagName: 'div',

  matchElement: el => el.is('div[data-type="sceneHeading"]'),
  import: (el, node) => {
    node.content = el.innerHTML
  },

  export: (node, el) => {
    el
      .attr({ 'data-type': 'sceneHeading' })
      .append(node.content)
  }
}

  
