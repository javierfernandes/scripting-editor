//
// Common small operations on documents through transactions
// elevates the abstraction level solving common tasks
// This are small functions (re)used from commands.

/**
 * Selects a given node completely
 */
export const selectTextContent = nodeId => tx => {
  const node = tx.get(nodeId)
  tx.setSelection({
    type: 'property',
    path: node.getPath(),
    startOffset: 0,
    endOffset: node.content.length
  })
}

export const selectContainerNode = nodeId => tx => {
  const { selection } = tx
  tx.setSelection({
    type: 'node',
    containerId: selection.containerId,
    nodeId: nodeId
  })
}