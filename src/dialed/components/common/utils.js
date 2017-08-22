
export const nodeClass = zuper => type => {
  const NodeClass = class extends zuper {}
  NodeClass.define({ type })
  return NodeClass
}

export const textType = (type, name = type) => ({ name, data: { type }})

export const baseConverter = (type, tagName = 'div') => ({
  type,
  tagName,
  matchElement: el => el.is(`${tagName}[data-type="${type}"]`)
})