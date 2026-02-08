class MyWidget extends HTMLElement {
  static get observedAttributes() { return ["title"]; }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }

  render() {
    const title = this.config.title ?? "Hello";
    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; font-family: system-ui; }
        .box { padding:12px; border:1px solid #ddd; border-radius:12px; }
        h3 { margin:0 0 6px; font-size:14px; }
      </style>
      <div class="box">
        <h3>${title}</h3>
        <pre>${JSON.stringify(this.config)}</pre>
      </div>
    `;
  }
}

MyWidget.registerSallaComponent('salla-test')
