
const stealifyEditorContext = class extends HTMLTextElement {
  connectedCallback() {
    this.value = import('./modules/context.js')  
  }
}

