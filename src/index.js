import Editor from './Editor'

const mount = function(node) {
  return new Editor(node)
}

export { mount }