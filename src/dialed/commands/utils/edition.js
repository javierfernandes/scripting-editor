const { keys } = Object

/**
 * A utility object to avoid getting the session in many places.
 * It has methods to perform changes on the document (transaction)
 * trying to avoid manually handling transactions and "changes"
 */
export class Editor {
  constructor(session) {
    this.session = session
  }
  insert(node) {
    // this ".nodes" seems coupled with our model, but well...
    if (node.nodes) {
      node.nodes = node.nodes.map(this.create.bind(this))
    }
    return extractIdOfCreated(this.transaction(tx => tx.insertBlockNode(node)))
  }

  create(node) {
    return extractIdOfCreated(this.transaction(tx => tx.create(node)))
  }

  transaction(fn) {
    return this.session.transaction(fn)
  }
}

const extractIdOfCreated = change => keys(change.created)[0]