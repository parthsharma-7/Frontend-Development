// Q4 - Multi-API Dashboard (Fetch + Promise.all)
// Run JSON Server for this question only:
//   json-server --watch db.json --port 3004

const API_BASE_Q4 = 'http://localhost:3004';

window.addEventListener('DOMContentLoaded', () => {
  const usersEl = document.getElementById('usersCount');
  const ordersEl = document.getElementById('ordersCount');
  const productsEl = document.getElementById('productsCount');
  const warningEl = document.getElementById('warning');

  function setSkeleton(el, isSkeleton) {
    if (isSkeleton) {
      el.classList.add('skeleton');
      el.textContent = '';
    } else {
      el.classList.remove('skeleton');
    }
  }

  setSkeleton(usersEl, true);
  setSkeleton(ordersEl, true);
  setSkeleton(productsEl, true);

  Promise.all([
    fetch(`${API_BASE_Q4}/users`),
    fetch(`${API_BASE_Q4}/orders`),
    fetch(`${API_BASE_Q4}/products`)
  ])
    .then(async ([usersRes, ordersRes, productsRes]) => {
      let hasError = !usersRes.ok || !ordersRes.ok || !productsRes.ok;
      let users = [], orders = [], products = [];

      try {
        if (usersRes.ok) users = await usersRes.json();
        if (ordersRes.ok) orders = await ordersRes.json();
        if (productsRes.ok) products = await productsRes.json();
      } catch (e) {
        hasError = true;
      }

      setSkeleton(usersEl, false);
      setSkeleton(ordersEl, false);
      setSkeleton(productsEl, false);

      usersEl.textContent = users.length;
      ordersEl.textContent = orders.length;
      productsEl.textContent = products.length;

      if (hasError) {
        warningEl.textContent = 'Some data could not be loaded.';
      }
    })
    .catch(() => {
      setSkeleton(usersEl, false);
      setSkeleton(ordersEl, false);
      setSkeleton(productsEl, false);
      usersEl.textContent = '-';
      ordersEl.textContent = '-';
      productsEl.textContent = '-';
      warningEl.textContent = 'Some data could not be loaded.';
    });
});
