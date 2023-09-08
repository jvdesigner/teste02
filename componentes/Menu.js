// Defina o componente de botão como um Web Component
class CustomButton extends HTMLElement {
  constructor() {
      super();

      // Crie um Shadow DOM para o componente
      this.attachShadow({ mode: 'open' });

      // Obtenha o texto do atributo "text" do componente
      const nomeLogo = this.getAttribute('text') || 'Logo';

      // Defina o HTML interno do componente
      this.shadowRoot.innerHTML = `
          <link href="/dist/output.css" rel="stylesheet">


          <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">${nomeLogo}</a>
  </div>
  <div class="flex-none gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>




      `;
  }
}

// Registre o componente de botão personalizado
customElements.define('custom-button', CustomButton);