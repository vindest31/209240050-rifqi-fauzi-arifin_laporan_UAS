// Data produk dummy untuk pencarian
const products = [
    { id: 'P001', name: 'Kemeja Flanel Stylish', price: 'Rp 185.000', description: 'Kemeja kasual nyaman, cocok untuk segala suasana. Terbuat dari bahan flanel berkualitas tinggi.', image: 'https://via.placeholder.com/300x200?text=Kemeja+Pria' },
    { id: 'P002', name: 'Sepatu Kets Modern', price: 'Rp 320.000', description: 'Sepatu kets nyaman dipakai sepanjang hari dengan desain kekinian. Sol anti-slip dan bahan breathable.', image: 'https://via.placeholder.com/300x200?text=Sepatu+Wanita' },
    { id: 'P003', name: 'Tas Laptop Minimalis', price: 'Rp 299.000', description: 'Lindungi laptop Anda dengan gaya dan fungsionalitas. Tas ini tahan air dan memiliki banyak kompartemen.', image: 'https://via.placeholder.com/300x200?text=Tas+Laptop' },
    { id: 'P004', name: 'Gaun Pesta Mewah', price: 'Rp 850.000', description: 'Gaun pesta elegan dengan bahan berkualitas tinggi, detail bordir yang menawan, dan potongan yang anggun. Sempurna untuk acara spesial Anda.', image: 'https://via.placeholder.com/300x200?text=Gaun+Pesta' },
    { id: 'P005', name: 'Headphone Gaming Pro', price: 'Rp 450.000', description: 'Headphone gaming dengan suara jernih dan mikrofon noise-cancelling. Desain ergonomis untuk kenyamanan maksimal.', image: 'https://via.placeholder.com/300x200?text=Headphone' },
    { id: 'P006', name: 'Smartwatch Multifungsi', price: 'Rp 600.000', description: 'Smartwatch canggih dengan fitur pemantau kesehatan, notifikasi pintar, dan daya tahan baterai lama.', image: 'https://via.placeholder.com/300x200?text=Smartwatch' }
];


// Fungsionalitas Galeri Gambar Produk
function changeMainImage(thumbnailSrc) {
    document.getElementById('mainProductImage').src = thumbnailSrc.replace('100x70', '600x400'); // Ganti ukuran gambar ke yang lebih besar
}

// Fungsionalitas Pencarian Produk
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchResultsDiv = document.getElementById('searchResults');
    const noResultsParagraph = document.getElementById('noResults');
    searchResultsDiv.innerHTML = ''; // Bersihkan hasil sebelumnya

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    if (filteredProducts.length > 0) {
        noResultsParagraph.style.display = 'none';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card'); // Gunakan kelas yang sudah ada atau buat baru jika ingin gaya berbeda
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price">${product.price}</p>
                <button onclick="alert('Anda memilih produk: ${product.name}')">Lihat Detail</button>
            `;
            searchResultsDiv.appendChild(productCard);
        });
    } else {
        noResultsParagraph.style.display = 'block';
    }
}


// Navigasi sederhana untuk menggulir halaman (dari contoh sebelumnya)
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Anda bisa menambahkan fungsionalitas viewProductDetail dari contoh sebelumnya di sini
// Jika ingin mempertahankan fitur detail produk dengan checkout WhatsApp
/*
const homeSection = document.getElementById('home'); // Jika Anda ingin menggunakan kembali ini, pastikan ada #home section di HTML baru Anda
const productDetailSection = document.getElementById('product-detail');
const detailProductName = document.getElementById('detail-product-name');
const detailProductPrice = document.getElementById('detail-product-price');
const detailProductImage = document.getElementById('detail-product-image');
const detailProductDescription = document.getElementById('detail-product-description');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout');

function viewProductDetail(name, price, image, description) {
    // Sembunyikan bagian lain jika ada, dan tampilkan detail produk
    if (homeSection) homeSection.style.display = 'none';
    if (productDetailSection) productDetailSection.classList.add('active');

    if (detailProductName) detailProductName.textContent = name;
    if (detailProductPrice) detailProductPrice.textContent = price;
    if (detailProductImage) detailProductImage.src = image;
    if (detailProductDescription) detailProductDescription.textContent = description;

    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
    const message = Halo Toko XYZ, saya tertarik dengan produk *${name}* seharga *${price}*. Mohon informasinya lebih lanjut.;
    const whatsappLink = https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)};
    if (whatsappCheckoutBtn) {
        whatsappCheckoutBtn.href = whatsappLink;
        whatsappCheckoutBtn.target = "_blank";
    }
}

function hideProductDetail() {
    if (productDetailSection) productDetailSection.classList.remove('active');
    if (homeSection) homeSection.style.display = 'block';
}
*/