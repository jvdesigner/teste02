

// Defina o componente de botão como um Web Component
class CustomButton extends HTMLElement {
  constructor() {
      super();

      // Crie um Shadow DOM para o componente
      this.attachShadow({ mode: 'open' });

      // Obtenha o texto do atributo "text" do componente
      const txtbtn = this.getAttribute('text') || 'Entrar';

      // Defina o HTML interno do componente
      this.shadowRoot.innerHTML = `

          <link href="/dist/output.css" rel="stylesheet">
          
          <button class="btn bg-primary">${txtbtn}</button>
        

      `;
  }
}

// Registre o componente de botão personalizado
customElements.define('custom-button', CustomButton);


