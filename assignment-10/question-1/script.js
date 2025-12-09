// Q1 - Real-Time Live Search (jQuery AJAX)
// Run JSON Server for this question only:
//   json-server --watch db.json --port 3001

const API_BASE_Q1 = 'http://localhost:3001';

$(function () {
  const $searchBox = $('#searchBox');
  const $results = $('#results');
  const $loading = $('#loading');
  const $message = $('#message');

  let currentRequest = null;
  let debounceTimer = null;

  function renderProducts(products) {
    $results.empty();
    if (!products.length) {
      $message.text('No products found');
      return;
    }
    $message.text('');
    products.forEach(p => {
      const card = $(
        `<div class="product-card">
          <img src="${p.image}" alt="${p.name}" />
          <h4>${p.name}</h4>
          <p>Price: $${p.price}</p>
        </div>`
      );
      $results.append(card);
    });
  }

  function search(term) {
    if (currentRequest) {
      currentRequest.abort();
    }
    $loading.show();
    $message.text('');

    currentRequest = $.ajax({
      url: `${API_BASE_Q1}/products`,
      method: 'GET',
      data: { q: term },
    })
      .done(data => {
        renderProducts(data);
      })
      .fail(err => {
        if (err.statusText === 'abort') return;
        $message.text('Error loading products');
        $results.empty();
      })
      .always(() => {
        $loading.hide();
      });
  }

  $searchBox.on('keyup', function () {
    const term = $(this).val().trim();

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      search(term);
    }, 300);
  });

  // Initial load (all products)
  search('');
});
