import { keymap } from 'prosemirror-keymap'
import { baseKeymap } from 'prosemirror-commands'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { DOMParser, Schema } from 'prosemirror-model'
import DefaultSchema from './Schema'

class Editor {
  constructor(node) {
    const schema = new Schema(DefaultSchema)

    const state = EditorState.create({
      schema,

      plugins: [
        keymap(baseKeymap),
      ]
    })

    const view = new EditorView(node, {
      state
    })

    this.view = view
  }

  toJSON() {
    return this.view.state.toJSON()
  }
}

export default Editor