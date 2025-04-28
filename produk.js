/**
 * DATA PRODUK - SHOPEE CLONE
 * File ini berisi data produk dan fungsi-fungsi terkait produk
 */

// ==================== DATA PRODUK ====================
const products = [
  {
    id: 1,
    name: "Smartphone X Pro",
    price: 5000000,
    discountedPrice: 35000,
    desc: "Flagship dengan kamera 108MP, baterai 5000mAh, dan layar AMOLED 120Hz. Dilengkapi dengan prosesor terbaru dan desain premium.",
    image: "img/0001/0001.jpg",
    gallery: [
      "img/1a.jpg",
      "img/1b.jpg",
      "img/1c.jpg"
    ],
    rating: 4.8,
    sold: 120,
    isRecommended: true,
    category: "elektronik",
    specifications: {
      layar: "6.7 inch AMOLED",
      prosesor: "Snapdragon 888",
      ram: "12GB",
      penyimpanan: "256GB",
      baterai: "5000mAh"
    }
  },
  {
    id: 2,
    name: "Kemeja Flanel Premium",
    price: 35000,
    desc: "Bahan katun premium dengan desain casual yang stylish. Tersedia dalam berbagai warna dan ukuran. Nyaman dipakai sehari-hari.",
    image: "img/0002/0002.jpg",
    gallery: [
      "img/shirt.jpg",
      "img/shirt-back.jpg",
      "img/shirt-detail.jpg"
    ],
    rating: 4.5,
    sold: 89,
    isRecommended: true,
    category: "fashion",
    specifications: {
      bahan: "100% Katun",
      ukuran: "S, M, L, XL",
      warna: "Biru, Merah, Hitam",
      perawatan: "Bisa dicuci mesin"
    }
  },
  {
    id: 3,
    name: "Paket Snack Murah",
    price: 75000,
    discountedPrice: 35000,
    desc: "Berisi 10 macam snack favorit: coklat, keripik kentang, biskuit, wafer, dan lainnya. Cocok untuk stok camilan di rumah.",
    image: "img/0003/0003.jpg",
    gallery: [
      "11.jpg",
      "11.jpg",
      "11.jpg"
    ],
    rating: 4.2,
    sold: 210,
    category: "makanan",
    specifications: {
      berat: "1.2 kg",
      isi: "10 jenis snack",
      kadaluarsa: "6 bulan",
      penyimpanan: "Tempat kering dan sejuk"
    }
  },
  {
    id: 4,
    name: "Headphone Wireless Pro",
    price: 1200000,
    discountedPrice: 35000,
    desc: "Headphone Bluetooth dengan noise cancellation, bass yang dalam, dan baterai tahan hingga 30 jam pemakaian.",
    image: "img/0004/0004.jpg",
    gallery: [
      "img/0003.jpg",
      "img/headphone-case.jpg",
      "img/headphone-wearing.jpg"
    ],
    rating: 4.7,
    sold: 56,
    isRecommended: true,
    category: "elektronik",
    specifications: {
      konektivitas: "Bluetooth 5.0",
      baterai: "30 jam",
      fitur: "Noise Cancelling, Microphone",
      warna: "Hitam, Putih"
    }
  },
  {
    id: 5,
    name: "kaos",
    price: 1200000,
    discountedPrice: 35000,
    desc: "Headphone Bluetooth dengan noise cancellation, bass yang dalam, dan baterai tahan hingga 30 jam pemakaian.",
    image: "img/0005/0005.jpg",
    gallery: [
      "img/headphone.jpg",
      "img/headphone-case.jpg",
      "img/headphone-wearing.jpg"
    ],
    rating: 4.7,
    sold: 56,
    isRecommended: true,
    category: "Fashion",
    specifications: {
      konektivitas: "Bluetooth 5.0",
      baterai: "30 jam",
      fitur: "Noise Cancelling, Microphone",
      warna: "Hitam, Putih"
    }
  },
  {
    id: 6,
    name: "Headphone Wireless Pro",
    price: 1200000,
    discountedPrice: 35000,
    desc: "Headphone Bluetooth dengan noise cancellation, bass yang dalam, dan baterai tahan hingga 30 jam pemakaian.",
    image: "img/0004/0004.jpg",
    gallery: [
      "img/0003.jpg",
      "img/headphone-case.jpg",
      "img/headphone-wearing.jpg"
    ],
    rating: 4.7,
    sold: 56,
    isRecommended: true,
    category: "elektronik",
    specifications: {
      konektivitas: "Bluetooth 5.0",
      baterai: "30 jam",
      fitur: "Noise Cancelling, Microphone",
      warna: "Hitam, Putih"
    }
  },
  {
    id: 7,
    name: "Smartphone X Pro",
    price: 5000000,
    discountedPrice: 35000,
    desc: "Flagship dengan kamera 108MP, baterai 5000mAh, dan layar AMOLED 120Hz. Dilengkapi dengan prosesor terbaru dan desain premium.",
    image: "img/0001/0001.jpg",
    gallery: [
      "img/1a.jpg",
      "img/1b.jpg",
      "img/1c.jpg"
    ],
    rating: 4.8,
    sold: 120,
    isRecommended: false,
    category: "elektronik",
    specifications: {
      layar: "6.7 inch AMOLED",
      prosesor: "Snapdragon 888",
      ram: "12GB",
      penyimpanan: "256GB",
      baterai: "5000mAh"
    }
  },
 

  





];

// ==================== DATA KATEGORI ====================
const categories = [
  { id: "elektronik", name: "Elektronik" },
  { id: "fashion", name: "Fashion" },
  { id: "makanan", name: "Makanan" },
  { id: "rumah", name: "Perlengkapan Rumah" }
];


// ==================== FUNGSI PRODUK ====================

/**
 * Mencari produk berdasarkan ID
 * @param {number} id - ID produk yang dicari
 * @returns {object|null} Objek produk atau null jika tidak ditemukan
 */
function getProductById(id) {
  return products.find(product => product.id === id) || null;
}

/**
 * Menampilkan detail produk ke halaman
 */
function displayProductDetail() {
  // Ambil ID produk dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  // Cari produk
  const product = getProductById(productId);
  
  // Jika produk tidak ditemukan
  if (!product) {
    alert("Produk tidak ditemukan");
    window.location.href = "index.html";
    return;
  }
  
  // Tampilkan data produk
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-description").textContent = product.desc;
  
  // Format harga
  const priceElement = document.getElementById("product-price");
  if (product.discountedPrice) {
    priceElement.innerHTML = `
      <span class="original-price">Rp${product.price.toLocaleString('id-ID')}</span>
      <span class="discount-price">Rp${product.discountedPrice.toLocaleString('id-ID')}</span>
    `;
  } else {
    priceElement.textContent = `Rp${product.price.toLocaleString('id-ID')}`;
  }
  
  // Set gambar utama
  document.getElementById("product-image").src = product.image;
  
  // Tambahkan rating dan terjual
  const productInfo = document.querySelector(".product-info");
  const ratingSold = document.createElement("p");
  ratingSold.className = "sold";
  ratingSold.textContent = `⭐ ${product.rating} | Terjual: ${product.sold}+`;
  productInfo.appendChild(ratingSold);
  
  // Tambahkan event listener untuk tombol
  document.querySelector(".add-to-cart").addEventListener("click", () => addToCart(product.id));
  document.querySelector(".buy-now").addEventListener("click", () => buyNow(product.id));
}

/**
 * Menambahkan produk ke keranjang
 * @param {number} productId - ID produk yang akan ditambahkan
 */
function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Cek apakah produk sudah ada di keranjang
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      discountedPrice: product.discountedPrice,
      image: product.image,
      quantity: 1
    });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} telah ditambahkan ke keranjang`);
  
  // Update counter keranjang
  updateCartCount();
}

/**
 * Fungsi untuk checkout produk
 * @param {number} productId - ID produk yang akan dibeli
 */
function buyNow(productId) {
  const product = getProductById(productId);
  if (!product) return;
  
  // Simpan produk yang akan dibeli di localStorage
  localStorage.setItem("checkoutItems", JSON.stringify([{
    id: product.id,
    name: product.name,
    price: product.discountedPrice || product.price,
    quantity: 1,
    image: product.image
  }]));
  
  // Redirect ke halaman checkout
  window.location.href = "checkout.html";
}

/**
 * Memperbarui counter keranjang di navbar
 */
function updateCartCount() {
  const cartCountElements = document.querySelectorAll("#cart-count");
  if (!cartCountElements.length) return;
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  cartCountElements.forEach(element => {
    element.textContent = totalItems;
  });
}

/**
 * Mengambil produk rekomendasi
 * @returns {array} Array produk rekomendasi
 */
function getRecommendedProducts() {
  return products.filter(product => product.isRecommended);
}

/**
 * Mengambil produk diskon
 * @returns {array} Array produk diskon
 */
function getDiscountedProducts() {
  return products.filter(product => product.discountedPrice);
}

/**
 * Mencari produk berdasarkan keyword
 * @param {string} keyword - Kata kunci pencarian
 * @returns {array} Array produk yang sesuai
 */
function searchProducts(keyword) {
  const searchTerm = keyword.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    (product.desc && product.desc.toLowerCase().includes(searchTerm))
  );
}

// ==================== INISIALISASI ====================

// Jika berada di halaman detail produk, tampilkan produk
if (window.location.pathname.includes("product-detail.html")) {
  document.addEventListener("DOMContentLoaded", displayProductDetail);
}

// Update counter keranjang saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateCartCount);

// Ekspor fungsi dan data jika diperlukan
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    products,
    categories,
    user,
    getProductById,
    getRecommendedProducts,
    getDiscountedProducts,
    searchProducts,
    addToCart,
    buyNow
  };
}

// produk.js (updated user data section)
// ==================== DATA USER ====================
const user = {
  id: "USR-001",
  name: "SERBA 35 RUPIAH",
  email: "budi@example.com",
  pin: "123456",
  profilePic: "img/default-profile.jpg",
  joinDate: "2023-01-15",
  address: { // Changed from addresses array to single address object
    id: 1,
    label: "Rumah",
    recipient: "Budi Santoso",
    phone: "08123456789",
    province: "DKI Jakarta",
    district: "Jakarta Pusat",
    postalCode: "10110",
    street: "Jl. Merdeka No. 123",
    details: "Apartemen Merdeka, Lantai 5",
    type: "rumah",
    isPrimary: true
  }
};

// ==================== FUNGSI ALAMAT ====================
function saveAddress(addressData) {
  user.address = {
    id: 1, // ID tetap 1 karena hanya 1 alamat
    label: addressData.type === 'rumah' ? 'Rumah' : 'Kantor',
    recipient: addressData.fullname,
    phone: addressData.phone,
    province: addressData.province,
    district: addressData.district,
    postalCode: addressData.postalCode,
    street: addressData.street,
    details: addressData.details || '',
    type: addressData.type,
    isPrimary: true
  };
  return true;
}

function getAddress() {
  return user.address || null;
}

// ==================== FUNGSI PROFIL ====================
function updateProfile(profileData) {
  user.name = profileData.name;
  user.email = profileData.email;
  user.pin = profileData.pin;
  return true;
}



// Di produk.js, hapus fungsi buyNow yang duplikat dan pastikan hanya ada satu seperti ini:
function buyNow(productId) {
  const product = getProductById(productId);
  if (!product) return;
  
  // Simpan produk yang akan dibeli di localStorage
  localStorage.setItem("checkoutItems", JSON.stringify([{
    id: product.id,
    name: product.name,
    price: product.discountedPrice || product.price,
    quantity: 1,
    image: product.image
  }]));
  
  // Redirect ke halaman checkout WhatsApp
  window.location.href = "checkout-wa.html";
}