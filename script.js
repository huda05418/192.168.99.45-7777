// ========== GLOBAL FUNCTIONS ========== //

// Tampilkan semua produk
function displayProducts(productsToShow) {
    const productList = document.getElementById('product-list');
    if (!productList) return;
    
    productList.innerHTML = productsToShow.map(product => `
      <div class="product-card" onclick="showProductDetail(${product.id})">
        <img src="${product.image}" class="product-image">
        <div class="product-info">
          <h4>${product.name}</h4>
          ${product.discountedPrice ? `
            <p class="price">
              <span class="original-price">Rp${product.price.toLocaleString()}</span>
              <span class="discount-price">Rp${product.discountedPrice.toLocaleString()}</span>
            </p>
          ` : `
            <p class="price">Rp${product.price.toLocaleString()}</p>
          `}
          <p class="sold">Terjual: ${product.sold}+</p>
        </div>
      </div>
    `).join('');
}

// Tampilkan produk rekomendasi
function displayRecommended() {
    const recommended = products.filter(p => p.isRecommended);
    const container = document.getElementById('recommended-banner');
    
    if (container) {
        container.innerHTML = recommended.map(product => `
          <div class="banner-card" onclick="showProductDetail(${product.id})">
            <img src="${product.image}">
            <p>${product.name}</p>
          </div>
        `).join('');
    }
}

// Tampilkan produk diskon
function displayDiscounted() {
    const discounted = products.filter(p => p.discountedPrice);
    const container = document.getElementById('discount-banner');
    
    if (container) {
        container.innerHTML = discounted.map(product => `
          <div class="banner-card" onclick="showProductDetail(${product.id})">
            <img src="${product.image}">
            <div class="discount-badge">DISKON</div>
            <p>Rp${product.discountedPrice.toLocaleString()}</p>
          </div>
        `).join('');
    }
}

// Fungsi pencarian
function handleSearch(event) {
    event.preventDefault();
    const keyword = document.getElementById('search-input').value.trim();
    
    if (!keyword) return;
  
    // Tampilkan loading
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'block';
    
    // Simulasi delay (2 detik)
    setTimeout(() => {
        localStorage.setItem('searchKeyword', keyword);
        window.location.href = 'search-results.html';
    }, 2000);
}

// Fungsi untuk halaman hasil pencarian
function displaySearchResults() {
    const keyword = localStorage.getItem('searchKeyword');
    if (!keyword) {
        window.location.href = 'index.html';
        return;
    }

    const results = products.filter(p => 
        `${p.name} ${p.desc || ''}`.toLowerCase().includes(keyword.toLowerCase())
    );
    
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
        resultsContainer.innerHTML = results.length > 0 ? results.map(p => `
            <div class="product-card" onclick="showProductDetail(${p.id})">
                <img src="${p.image}" class="product-image">
                <div class="product-info">
                    <h4>${p.name}</h4>
                    ${p.discountedPrice ? `
                        <p class="price">
                            <span class="original-price">Rp${p.price.toLocaleString()}</span>
                            <span class="discount-price">Rp${p.discountedPrice.toLocaleString()}</span>
                        </p>
                    ` : `
                        <p class="price">Rp${p.price.toLocaleString()}</p>
                    `}
                    <p class="sold">Terjual: ${p.sold}+</p>
                </div>
            </div>
        `).join('') : `
            <div class="empty-state">
                <p>😢 Produk tidak ditemukan</p>
                <button onclick="window.location.href='index.html'">Kembali ke Beranda</button>
            </div>
        `;
    }
}

// Fungsi kategori
function showCategoryPopup() {
    const popup = document.getElementById('category-popup');
    const categoryList = document.getElementById('category-list');
    
    if (popup && categoryList) {
        categoryList.innerHTML = categories.map(category => `
          <div class="category-item">
            <input type="checkbox" id="cat-${category.id}" value="${category.id}">
            <label for="cat-${category.id}">${category.name}</label>
          </div>
        `).join('');
        
        popup.style.display = 'flex';
    }
}

function applyCategoryFilter() {
    const selected = [...document.querySelectorAll('#category-list input:checked')]
      .map(checkbox => checkbox.value);
    
    const filtered = selected.length === 0 
      ? products 
      : products.filter(p => selected.includes(p.category));
    
    displayProducts(filtered);
    closePopup();
}

function resetCategory() {
    displayProducts(products);
    closePopup();
}

function closePopup() {
    const popup = document.getElementById('category-popup');
    if (popup) popup.style.display = 'none';
}

// Fungsi untuk halaman account
function loadProfile() {
    if (!document.getElementById('profile-name')) return;
    
    document.getElementById('profile-name').textContent = user.name;
    document.getElementById('profile-id').textContent = `ID: ${user.id}`;
    document.getElementById('profile-image').src = user.profilePic;
}

function showProductDetail(productId) {
    localStorage.setItem('selectedProduct', productId);
    window.location.href = 'product-detail.html';
}

// ========== INITIALIZE ========== //
document.addEventListener('DOMContentLoaded', () => {
    // Halaman utama
    if (document.getElementById('product-list')) {
        displayProducts(products);
        displayRecommended();
        displayDiscounted();
    }
    
    // Halaman hasil pencarian
    if (window.location.pathname.includes('search-results.html')) {
        displaySearchResults();
    }
    
    // Halaman account
    if (document.getElementById('profile-name')) {
        loadProfile();
    }
    
    // Halaman detail produk
    if (window.location.pathname.includes('product-detail.html')) {
        displayProductDetail();
    }
});
// Sample Data Produk
const produkList = [
    {
      id: 1,
      nama: "Kaos Polos",
      harga: 75000,
      deskripsi: "Kaos polos berbahan katun combed 30s, nyaman dipakai sehari-hari.",
      gambar: "https://via.placeholder.com/600x600?text=Kaos+Polos",
    },
    {
      id: 2,
      nama: "Smartphone Z5 Pro",
      harga: 4500000,
      deskripsi: "Smartphone terbaru dengan layar AMOLED dan chipset terbaru.",
      gambar: "https://via.placeholder.com/600x600?text=Smartphone+Z5+Pro",
    }
  ];
  
