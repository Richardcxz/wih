const API = 'http://localhost:3000';
            ${product.category}
          </div>

          <h3>${product.title}</h3>

          <div class="actions">

            <a href="${product.link}" target="_blank">
              <button>Ver</button>
            </a>

            <button onclick="favorite(${product.id})">
              ${product.favorite ? '★' : '☆'}
            </button>

            <button onclick="removeProduct(${product.id})">
              X
            </button>

          </div>

        </div>

      </div>

    `;

  });

  new Sortable(products, {
    animation: 150
  });

}

async function addProduct(){

  const link = document.getElementById('linkInput').value;

  await fetch(`${API}/products`, {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({ link })
  });

  closeModal();

  loadProducts();

}

async function removeProduct(id){

  await fetch(`${API}/products/${id}`, {
    method:'DELETE'
  });

  loadProducts();

}

async function favorite(id){

  await fetch(`${API}/favorite/${id}`, {
    method:'PUT'
  });

  loadProducts();

}

function openModal(){
  document.getElementById('modal').style.display='flex';
}

function closeModal(){
  document.getElementById('modal').style.display='none';
}

loadProducts();
