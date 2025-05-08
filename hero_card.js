class HeroCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
        * {
          margin: 0;
          padding: 0;
          box-sizingorder-box;
          font-family: "Roboto", sans-serif;: b
        }
          .card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            width: 375px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
            box-shadow: 0 2px 25px rgba(0, 0, 0, 0.493);
            padding: 10px;
          }
          .card:hover {
            transform: translateY(-5px);
          }
          img {
            width: 95%;
            height: 400px;
            object-fit: cover;
            object-position: top;
          }
          h3 {
            font-size: 40px;
            text-align: center;
            margin-bottom: 8px;
          }
          .info h2 {
            font-size: 36px;
            text-align: center;
          }
          .info h4 {
            font-size: 19px;
            text-align: center;
          }
          .info h5 {
            font-size: 16px;
            margin-bottom: 4px;
            text-align: center;
          }
          .info h6 {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 10px;
            text-align: center;
          }
          button {
            display: block;
            margin: 10px auto 0 auto;
            padding: 8px 15px;
            background-color: #020f3d;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: background 0.3s;
          }
          button:hover {
            transform: scale(1.05);
          }

          .modal-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }
          .modal {
            background: white;
            border-radius: 10px;
            padding: 20px;
            display: flex;
            gap: 20px;
            max-width: 800px;
            width: 90%;
            max-height: 90%;
            overflow-y: auto;
          }
          .modal img {
            width: 300px;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
          }
          .modal-content h2 {
            margin-bottom: 10px;
          }
          .close-btn {
            position: absolute;
            top: 20px;
            right: 30px;
            font-size: 30px;
            color: white;
            cursor: pointer;
          }
        </style>
  
        <div class="card">
          <h3 id="nombre-real"></h3>
          <img id="imagen">
          <div class="info">
            <h2 id="alias"></h2>
            <h4 id="casa"></h4>
            <h5 id="aparicion"></h5>
            <h6 id="descripcion"></h6>
            <button id="ver-mas">Ver más</button>
          </div>
        </div>
  
        <div class="modal-overlay">
          <div class="close-btn">&times;</div>
          <div class="modal">
            <img id="modal-img">
            <div class="modal-content">
              <h2 id="modal-alias"></h2>
              <p id="modal-desc"></p>
            </div>
          </div>
        </div>
      `;
    }
  
    connectedCallback() {
      const shadow = this.shadowRoot;
      const img = shadow.getElementById('imagen');
      img.src = this.getAttribute('imagen');
      shadow.getElementById('nombre-real').textContent = this.getAttribute('nombre');
      shadow.getElementById('alias').textContent = this.getAttribute('alias');
      shadow.getElementById('casa').textContent = this.getAttribute('casa');
      shadow.getElementById('aparicion').textContent = this.getAttribute('aparicion');
      shadow.getElementById('descripcion').textContent = this.getAttribute('descripcion');
  
      const btn = shadow.getElementById('ver-mas');
      const overlay = shadow.querySelector('.modal-overlay');
      const closeBtn = shadow.querySelector('.close-btn');
  
      btn.addEventListener('click', () => {
        shadow.getElementById('modal-img').src = this.getAttribute('imagen');
        shadow.getElementById('modal-alias').textContent = this.getAttribute('alias');
        shadow.getElementById('modal-desc').textContent = this.getAttribute('descripcion-larga');
        overlay.style.display = 'flex';
      });
  
      closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
      });
    }
}
  
customElements.define('hero-card', HeroCard);
  
  