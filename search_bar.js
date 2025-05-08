class SearchBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          input {
            width: 100%;
            max-width: 800px;
            padding: 10px;
            font-size: 22px;
            border-radius: 5px;
            border: 2px solid #ccc;
            margin: 20px auto;
            display: block;
            margin-bottom: 40px;
          }
        </style>
        <input type="text" placeholder="Buscar por alias...">
      `;
    }
  
    connectedCallback() {
      const input = this.shadowRoot.querySelector('input');
      
      input.addEventListener('input', () => {
        const searchTerm = input.value.toLowerCase();

        const cards = document.querySelectorAll('hero-card');
  
        cards.forEach(card => {
          const alias = card.getAttribute('alias').toLowerCase();
          const visible = alias.includes(searchTerm);
          card.style.display = visible ? 'block' : 'none';
        });
      });
    }
  }
  
  customElements.define('search-bar', SearchBar);
  