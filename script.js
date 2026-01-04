// Product data
const PRODUCTS = [
    {
        "id": 1,
        "name": "Tripple (3) Patti Woolen Shawl",
        "category": "Wovens",
        "price": 2499,
        "originalPrice": 3499,
        "img": "3 patti kullu himachali handloom shawl1.1.jpg",
        "gallery": [
            "3 patti kullu himachali handloom shawl1.1.jpg",
            "3 patti kullu himachali handloom shawl1.2.jpg",
            "3 patti kullu himachali handloom shawl1.3.jpg"
        ],
        "options": { "type": "Color", "values": ["Black", "White", "Grey(Shown)"] },
        "shortDesc": "Elegant tripple (3) patti design.",
        "desc": "Handwoven wool Shawl with a classic tripple patti design. Lightweight yet warm.Wrap yourself in the authentic warmth of the Kullu Valley. Meticulously hand-woven by local artisans, this shawl combines a solid, cozy base with vibrant, traditional patti (borders). It's designed to provide superior insulation during cold winters while keeping you elegant. A perfect gift of heritage that never goes out of fashion. Meticulously hand-woven by local artisans.",
        "care": "Hand or Machine wash below 40 degree, use mild detergent.",
        "inStock": true,
        "reviews": [
            { "user": "Niharika Nerva", "rating": 5, "text": "Bhot sunder shawl hai.. design ekdm saaf hai or garam b hai. Packaging b achi thi. Thanks." },
            { "user": "Anjali S.", "rating": 4, "text": "Authentic Kullu shawl. Pure wool feel hota hai." }
        ]
    },
    {
        "id": 2,
        "name": "Handloom made Signle Patti Woolen Shawl",
        "category": "Wovens",
        "price": 1599,
        "originalPrice": 2284,
        "img": "Single patti kullu himachali handloom Shawl1.1.jpg",
        "gallery": [
            "Single patti kullu himachali handloom Shawl1.1.jpg",
            "Single patti kullu himachali handloom Shawl1.2.jpg",
            "Single patti kullu himachali handloom Shawl1.3.jpg"
        ],
        "options": { "type": "Color", "values": ["Light Grey(Shown)", "White", "Light Brown"] },
        "shortDesc": "Elegant single patti design.",
        "desc": "Handwoven wool Shawl with a classic single patti design. Lightweight yet warm.Wrap yourself in the authentic warmth of the Kullu Valley. Meticulously hand-woven by local artisans, this shawl combines a solid, cozy base with vibrant, traditional patti (borders). It's designed to provide superior insulation during cold winters while keeping you elegant. A perfect gift of heritage that never goes out of fashion.Handwoven wool Shawl with a classic single patti design. Lightweight yet warm. Perfect for everyday wear.",
        "care": "Hand or Machine wash below 40 degree.",
        "inStock": true,
        "reviews": [
            { "user": "Nishant Choudhary", "rating": 5, "text": "Mene apni mummy k liye gift liya tha.. unko bhut pasand aaya. Keh ri thi chubhne wala material ni hai soft hai." },
            { "user": "Rohan K.", "rating": 5, "text": "Best quality at this price." }
        ]
    },
    {
        "id": 3,
        "name": "Tripple (3) Patti Wool Stole",
        "category": "Wovens",
        "price": 949,
        "originalPrice": 1356,
        "img": "3 patti kullu himachali handloom Stole1.1.jpg",
        "gallery": [
            "3 patti kullu himachali handloom Stole1.1.jpg",
            "3 patti kullu himachali handloom Stole1.2.jpg",
            "3 patti kullu himachali handloom Stole1.3.jpg"
        ],
        "options": { "type": "Color", "values": ["Grey (Shown)", "White", "Black", "Red"] },
        "shortDesc": "Elegant tripple (3) patti design.",
        "desc": "Handwoven wool Stole with a classic tripple patti design. Lightweight yet warm. This handloom stole is crafted for comfort, offering a soft texture and the vibrant, intricate patterns unique to the Kullu valley. A versatile accessory that adds an artistic touch to any outfit, whether you are dressing up for work or heading out for a casual evening.",
        "care": "Hand or Machine wash below 40 degree, use mild deteregent. Use Napthalene ball/ Camphor (Kapur) (when not in use).",
        "inStock": true
    },
    {
        "id": 4,
        "name": "Tripple (3) Patti Woolen Stole",
        "category": "Wovens",
        "price": 949,
        "originalPrice": 1356,
        "img": "3 patti kullu himachali handloom Stole2.1.jpg",
        "gallery": [
            "3 patti kullu himachali handloom Stole2.1.jpg",
            "3 patti kullu himachali handloom Stole2.2.jpg"
        ],
        "options": { "type": "Color", "values": ["Black (Shown)", "White", "Grey"] },
        "shortDesc": "Elegant tripple (3) patti design.",
        "desc": "Handwoven wool Stole with a classic tripple patti design. Lightweight yet warm. This handloom stole is crafted for comfort, offering a soft texture and the vibrant, intricate patterns unique to the Kullu valley. A versatile accessory that adds an artistic touch to any outfit, whether you are dressing up for work or heading out for a casual evening.",
        "care": "Hand or Machine wash below 40 degree, use mild deteregent. Use Napthalene ball/ Camphor (Kapur) (when not in use).",
        "inStock": true
    },
    {
        "id": 5,
        "name": "Trendy Woolen Stole single patti",
        "category": "Wovens",
        "price": 699,
        "originalPrice": 999,
        "img": "Single patti kullu himachali handloom Stole1.1.jpg",
        "gallery": [
            "Single patti kullu himachali handloom Stole1.1.jpg",
            "Single patti kullu himachali handloom Stole1.2.jpg",
            "Single patti kullu himachali handloom Stole1.3.jpg"
        ],
        "options": { "type": "Color", "values": ["Black", "Red (Shown)", "White", "Grey", "Pink"] },
        "shortDesc": "Elegant Single patti design.",
        "desc": "Handwoven wool Stole with a classic patti design. Lightweight yet warm. This handloom stole is crafted for comfort, offering a soft texture and the vibrant, intricate patterns unique to the Kullu valley. A versatile accessory that adds an artistic touch to any outfit, whether you are dressing up for work or heading out for a casual evening",
        "care": "Hand or Machine wash below 40 degree.",
        "inStock": true
    },
    {
        "id": 6,
        "name": "Handmade handloom Coat Patti/yardages",
        "category": "Wovens",
        "price": 799,
        "originalPrice": 1141,
        "img": "handloom pure wool kulluvi coat patti yardage.jpg",
        "gallery": ["handloom pure wool kulluvi coat patti yardage.jpg"],
        "options": { "type": "Color", "values": ["Black (Shown)", "White", "Grey", "White with black stripes"] },
        "shortDesc": "Handmade Kulluvi yardage",
        "desc": "Price of patti/yardage is mentioned per meter. This Handwoven yardage or kulluvi patti best suited for all weather due to its wicking nature and best suited for full nehru coat, half jackets, lowers and shirting.",
        "care": "Dry Clean only.",
        "inStock": true
    },
    {
        "id": 7,
        "name": "Himachali Traditional Cap Pahari topi",
        "category": "Cap",
        "price": 699,
        "originalPrice": 999,
        "img": "Traditional typical Kulluvi Himachali Cap pahari Topi.jpg",
        "gallery": [
            "Traditional typical Kulluvi Himachali Cap pahari Topi.jpg",
            "Traditional typical Kulluvi Himachali Cap pahari Topi1.jpg",
            "cap size.jpg"
        ],
        "options": { "type": "Size", "values": ["Size 5 (Small)", "Size 6 (Medium)", "Size 7 (Large)"] },
        "shortDesc": "Authentic Himachal Topi",
        "desc": "Authentic colorful border cap from Himachal. Perfect for festive occasions.",
        "care": "Do not wash in machine.",
        "inStock": true
    },
    {
        "id": 8,
        "name": "Himachali Traditional Cap Pahari topi",
        "category": "Cap",
        "price": 599,
        "originalPrice": 856,
        "img": "Traditional Kulluvi Himachali Cap pahari Topi.jpg",
        "gallery": [
            "Traditional Kulluvi Himachali Cap pahari Topi.jpg",
            "Traditional Kulluvi Himachali Cap pahari Topi1.jpg",
            "cap size.jpg"
        ],
        "options": { "type": "Size", "values": ["Size 5 (Small)", "Size 6 (Medium)", "Size 7 (Large)"] },
        "shortDesc": "Authentic Himachal Topi",
        "desc": "Authentic colorful border cap from Himachal. Perfect for festive occasions.",
        "care": "Do not wash in machine.",
        "inStock": true
    },
    {
        "id": 9,
        "name": "Maroon Himachali Cap Pahari topi",
        "category": "Cap",
        "price": 449,
        "originalPrice": 641,
        "img": "Maroon Himachali Cap pahari Topi.jpg",
        "gallery": [
            "Maroon Himachali Cap pahari Topi.jpg",
            "Maroon Himachali Cap pahari Topi1.jpg",
            "cap size.jpg"
        ],
        "options": { "type": "Size", "values": ["Size 5 (Small)", "Size 6 (Medium)", "Size 7 (Large)"] },
        "shortDesc": "Authentic Himachal Topi",
        "desc": "Authentic cap from Himachal in Maroon base.",
        "care": "Do not wash in machine.",
        "inStock": true
    },
    {
        "id": 10,
        "name": "Green Himachali Cap Pahari topi",
        "category": "Cap",
        "price": 449,
        "originalPrice": 641,
        "img": "Green Himachali Cap Pahari Topi.jpg",
        "gallery": [
            "Green Himachali Cap Pahari Topi1.jpg",
            "cap size.jpg"
        ],
        "options": { "type": "Size", "values": ["Size 5 (Small)", "Size 6 (Medium)", "Size 7 (Large)"] },
        "shortDesc": "Authentic Himachal Topi",
        "desc": "Authentic cap from Himachal in Green base.",
        "care": "Do not wash in machine.",
        "inStock": true
    },
    {
        "id": 11,
        "name": "Kingri Malana Himachali Cap",
        "category": "Cap",
        "price": 549,
        "originalPrice": 784,
        "img": "Kingri Malana Himachali Cap Pahari Topi.jpg",
        "gallery": [
            "Kingri Malana Himachali Cap Pahari Topi.jpg",
            "Kingri Malana Himachali Cap Pahari Topi1.jpg",
            "cap size.jpg"
        ],
        "options": { "type": "Size", "values": ["Size 5 (Small)", "Size 6 (Medium)", "Size 7 (Large)"] },
        "shortDesc": "Authentic Malana Style Topi",
        "desc": "Authentic Kingri Malana cap from Himachal.",
        "care": "Do not wash in machine.",
        "inStock": true
    },
    {
        "id": 12,
        "name": "Unisex Wool Hoodie (Blue/Gold)",
        "category": "Wovens",
        "price": 1099,
        "originalPrice": 1570,
        "img": "unisex blue hoodie golden broad border 1.1.jpg",
        "gallery": [
            "unisex blue hoodie golden broad border 1.1.jpg",
            "unisex blue hoodie golden broad border 1.2.jpg",
            "unisex hoodie fleece.jpg"
        ],
        "options": { "type": "Size", "values": ["S", "M", "L", "XL", "XXL"] },
        "shortDesc": "Handwoven winter hoodie.",
        "desc": "A warm, breathable woolen hoodie suitable for both men and women.",
        "care": "Hand wash with cold water.",
        "inStock": true
    },
    {
        "id": 13,
        "name": "Unisex Wool Hoodie (Golden Broad)",
        "category": "Wovens",
        "price": 1099,
        "originalPrice": 1570,
        "img": "unisex hoodie golden broad border 1.1.jpg",
        "gallery": [
            "unisex hoodie golden broad border 1.1.jpg",
            "unisex hoodie fleece.jpg"
        ],
        "options": { "type": "Size", "values": ["S", "M", "L", "XL", "XXL"] },
        "shortDesc": "Handwoven winter hoodie.",
        "desc": "A warm, breathable woolen hoodie.",
        "care": "Hand wash with cold water.",
        "inStock": true
    },
    {
        "id": 14,
        "name": "Unisex Wool Hoodie (3Golden Broad)",
        "category": "Wovens",
        "price": 1199,
        "originalPrice": 1713,
        "img": "unisex hoodie 3golden broad border 1.1.jpg",
        "gallery": [
            "unisex hoodie 3golden broad border 1.1.jpg",
            "unisex hoodie fleece.jpg"
        ],
        "options": { "type": "Size", "values": ["S", "M", "L", "XL", "XXL"] },
        "shortDesc": "Handwoven winter hoodie.",
        "desc": "A warm, breathable woolen hoodie suitable for both men and women.",
        "care": "Hand wash with cold water.",
        "inStock": true
    },
    {
        "id": 15,
        "name": "Unisex Wool Hoodie (Grey)",
        "category": "Wovens",
        "price": 999,
        "originalPrice": 1427,
        "img": "unisex grey hoodie narrow border border 1.1.jpg",
        "gallery": [
            "unisex grey hoodie narrow border border 1.1.jpg",
            "unisex grey hoodie narrow border border 1.2.jpg",
            "unisex grey hoodie narrow border border 1.3.jpg",
            "unisex hoodie fleece.jpg"
        ],
        "options": { "type": "Size", "values": ["S", "M", "L", "XL", "XXL"] },
        "shortDesc": "Handwoven winter hoodie.",
        "desc": "A warm, breathable woolen hoodie suitable for both men and women.",
        "care": "Hand wash with cold water.",
        "inStock": true
    },
    {
        "id": 16,
        "name": "Royal Angora Shawl",
        "category": "Wovens",
        "price": 5499,
        "originalPrice": 7856,
        "img": "royal-angora-white.jpg",
        "gallery": ["royal-angora-white.jpg"],
        "options": null,
        "shortDesc": "Premium Angora Wool.",
        "desc": "Luxurious and extremely soft Angora wool shawl. Very warm and lightweight.",
        "care": "Expert Dry Clean Only.",
        "inStock": true
    },
    {
        "id": 17,
        "name": "Pure wool Half Jacket (Nehru Jacket)",
        "category": "Jacket",
        "price": 1099,
        "originalPrice": 1570,
        "img": "Pure Wool Men's Half jacket sadri.jpg",
        "gallery": [
            "Pure Wool Men's Half jacket sadri.jpg",
            "Pure Wool Men's Half jacket sadri1.jpg"
        ],
        "options": { "type": "Size", "values": ["38", "40", "42", "44"] },
        "shortDesc": "Stylish woolen jacket.",
        "desc": "Traditional weave jacket with modern fitting. Can be worn over kurta or shirt.",
        "care": "Dry Clean Only.",
        "inStock": true,
        "reviews": [
            { "user": "Sarita Devi", "rating": 5, "text": "Mere husband k liye mangvaya tha size 40.. fitting ekdm perfect aayi hai. Wool pure lg ra hai. Acha product hai." },
            { "user": "Vikram", "rating": 4, "text": "Nice jacket, looks royal with kurta." }
        ]
    },
    {
        "id": 18,
        "name": "Unisex Muffler",
        "category": "Wovens",
        "price": 399,
        "originalPrice": 570,
        "img": "Unisex Muffler kulluvi border pure wool.jpg",
        "gallery": [
            "Unisex Muffler kulluvi border pure wool.jpg",
            "Unisex Muffler kulluvi border pure wool1.jpg"
        ],
        "options": { "type": "Color", "values": ["White", "Grey", "Light Brown", "Black"] },
        "shortDesc": "Traditional lightweight Muffler",
        "desc": "Traditional weave muffler with kulluvi motifs. Pure wool.",
        "care": "Hand wash/Dry Clean.",
        "inStock": true,
        "reviews": [
            { "user": "Rajesh Kumar", "rating": 5, "text": "Sister k liye liya tha college jane ko.. bhot bdia quality hai bhai. Price b theek hai." },
            { "user": "Dev", "rating": 5, "text": "Warm and stylish." }
        ]
    },
    {
        "id": 19,
        "name": "Handmade Unisex Stripe Muffler",
        "category": "Wovens",
        "price": 399,
        "originalPrice": 570,
        "img": "stripe1.jpg",
        "gallery": [
            "stripe1.jpg",
            "stripe2.jpg"
        ],
        "options": null,
        "shortDesc": "Traditional weave muffler",
        "desc": "Traditional weave muffler with kulluvi motifs. Purewool muffler weave on traditional handloom.",
        "care": "Hand wash/Dry Clean.",
        "inStock": true
    },
    {
        "id": 20,
        "name": "Embroided Women's Sleeveless Jacket (Black)",
        "category": "Jacket",
        "price": 799,
        "originalPrice": 1199,
        "img": "Embroided Sleeveless women's black jackets.jpg",
        "gallery": [
            "Embroided Sleeveless women's black jackets.jpg",
            "Embroided Sleeveless women's black jackets1.jpg"
        ],
        "options": { "type": "Size", "values": ["38", "40", "42", "44"] },
        "shortDesc": "Stylish sleeveless woolen jacket.",
        "desc": "Women's sleeveless jacket inspired by traditional winter clothing.The sleeveless pattern makes it easy to wear over kurtis, sweaters, or dresses. The jacket is comfortable, lightweight, and suitable for regular use during cold weather. The embroidery is neatly done and adds a subtle ethnic touch without making the jacket heavy.",
        "care": "Hand wash, Dry Clean.",
        "inStock": true
    },
    {
        "id": 21,
        "name": "Embroided Women's Sleeveless Jacket",
        "category": "Jacket",
        "price": 799,
        "originalPrice": 1199,
        "img": "Embroided Sleeveless women's jackets.jpg",
        "gallery": [
            "Embroided Sleeveless women's jackets.jpg",
            "Embroided Sleeveless women's jackets1.jpg"
        ],
        "options": { "type": "Size", "values": ["38", "40", "42", "44"] },
        "shortDesc": "Stylish woolen jacket.",
        "desc": "Women's sleeveless jacket inspired by traditional winter clothing.The sleeveless pattern makes it easy to wear over kurtis, sweaters, or dresses. The jacket is comfortable, lightweight, and suitable for regular use during cold weather. The embroidery is neatly done and adds a subtle ethnic touch without making the jacket heavy.",
        "care": "Hand wash, Dry Clean.",
        "inStock": true
    },
    {
        "id": 22,
        "name": "Extra weft Work Wall Decor",
        "category": "Home Decor",
        "price": 1499,
        "originalPrice": 2141,
        "img": "2.wall.jpg",
        "gallery": ["2.wall.jpg"],
        "options": { "type": "Size", "values": ["15*18 in"] },
        "shortDesc": "Heritage Wall Art",
        "desc": "15x18 inches (Per Panel) Made of pure wool material, wooden frame, Glass Panel",
        "care": "Dust with Soft Cloth.",
        "inStock": true
    },
    {
        "id": 23,
        "name": "Extra weft Work Wall Decor",
        "category": "Home Decor",
        "price": 2099,
        "originalPrice": 2999,
        "img": "3.wall.jpg",
        "gallery": ["3.wall.jpg"],
        "options": { "type": "Size", "values": ["15*18 in"] },
        "shortDesc": "Heritage Wall Art",
        "desc": "15x18 inches (Per Panel) Made of pure wool material, wooden frame, Glass Panel",
        "care": "Dust with Soft Cloth.",
        "inStock": false,
        "reviews": [
            { "user": "Mayank Sharma", "rating": 5, "text": "Masterpiece! Love from Bangalore." }
        ]
    },
    {
        "id": 24,
        "name": "Himachali pahadi Pulla/slippers",
        "category": "Footwear",
        "price": 349,
        "originalPrice": 570,
        "img": "Himachali Pullan hemp.jpg",
        "gallery": [
            "Himachali Pullan hemp.jpg",
            "Himachali Pullan hemp1.jpg"
        ],
        "options": null,
        "shortDesc": "Traditional handcrafted footwear",
        "desc": "Free Size Pahadi pulla or handmade slippers are woven with hemp bark by handicraft artisans, using colorful threads for decoration. Traditionally used for temple/kitchen, made of fully natural fibre.",
        "care": "keep them dry,avoid water.",
        "inStock": true,
        "reviews": [
            { "user": "Amit", "rating": 4, "text": "Ghar mein pehnne k liye best hai. look b traditional hai." },
            { "user": "Devansh Thakur", "rating": 5, "text": "Old memories refreshed. Good work." }
        ]
    }
];

let cart = JSON.parse(localStorage.getItem('handiweave_cart')) || [];
const RAZORPAY_KEY = "rzp_live_RuhteYn3JzTrhD";

// ===== UTILITY FUNCTIONS =====
function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }

function showNotification(msg) {
    const n = document.getElementById('notification');
    document.getElementById('notificationText').textContent = msg;
    n.classList.add('show'); 
    setTimeout(() => n.classList.remove('show'), 3000);
}

function saveCart() { 
    localStorage.setItem('handiweave_cart', JSON.stringify(cart)); 
    updateCartCount(); 
}

function updateCartCount() { 
    const count = cart.reduce((t,i) => t + i.quantity, 0);
    const countEl = document.getElementById('cartCount');
    if(countEl) countEl.textContent = count;
}

function getCartTotal() { 
    return cart.reduce((t,i) => t + (i.price * i.quantity), 0); 
}

// ===== CALCULATE SHIPPING (Based on your Parent Code) =====
function calculateShipping() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems <= 2) return 40;
    else if (totalItems <= 5) return 120;
    else return 150;
}

// ===== RENDER PRODUCTS =====
function renderProducts(items = PRODUCTS) {
    const container = document.getElementById('productsContainer');
    if(!container) return; // Prevent error if not on Shop page
    
    if(items.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1;text-align:center;">No products found.</p>';
        return;
    }
    container.innerHTML = items.map(p => {
        const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
        
        return `
        <div class="product-card">
            <span class="discount-badge">${discount}% OFF</span>
            ${!p.inStock ? '<span class="sold-out-badge">SOLD OUT</span>' : ''}
            
            <div class="product-image" onclick="openProductModal(${p.id})">
                <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/300x300?text=Handiweave';">
                ${!p.inStock ? '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.6);"></div>' : ''}
            </div>

            <div class="product-info">
                <div class="product-name" style="cursor:pointer;" onclick="openProductModal(${p.id})">${p.name}</div>
                
                <div class="product-price">
                    <span class="original-price">${formatPrice(p.originalPrice)}</span>
                    ${formatPrice(p.price)} <span style="font-size:0.7em;font-weight:400;color:#555;">(Inc. GST)</span>
                </div>

                <button class="add-to-cart-btn" onclick="openProductModal(${p.id})" ${!p.inStock ? 'disabled style="background:#888;"' : ''}>
                    <i class="fas fa-shopping-bag"></i> ${p.inStock ? ' ADD TO BAG' : ' Sold Out'}
                </button>
                
                <div style="margin-top:8px; font-size:0.85rem; text-decoration:underline; color:#666; cursor:pointer; padding: 5px;" onclick="openProductModal(${p.id})">
                    View More Details
                </div>
            </div>
        </div>
    `}).join('');
}

// ===== PRODUCT MODAL (Updated with Meter Logic) =====
function openProductModal(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if(!product) return;
    
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');

    // 1. OPTIONS LOGIC
    let optionsHTML = '';
    if(product.options) {
        const opts = product.options.values.map(v => `<option value="${v}">${v}</option>`).join('');
        optionsHTML = `
            <div class="variant-selector">
                <label>Select ${product.options.type}:</label>
                <select id="modalVariantSelect">${opts}</select>
            </div>
        `;
    }

    // 2. METER/YARDAGE LOGIC (Only appears if name contains 'yardage' or 'patti')
    let meterHtml = '';
    if (product.name.toLowerCase().includes('yardage') || product.name.toLowerCase().includes('patti')) {
        meterHtml = `
            <div style="margin: 15px 0; background: #fff8e1; padding: 10px; border-radius: 4px; border: 1px dashed #C5A065;">
                <label style="font-weight:bold; color:#7A5548;">Length (Meters):</label>
                <div style="display:flex; gap:10px; margin-top:5px;">
                    <input type="number" id="meterInput" value="1" min="1" 
                           style="width:80px; padding:8px; border:1px solid #ccc; border-radius:4px; font-weight:bold; font-size:1.1rem;">
                    <span style="align-self:center; color:#555;">Meters</span>
                </div>
                <small style="color:#666;">Price calculates per meter in cart.</small>
            </div>
        `;
    }

    // 3. THUMBS LOGIC
    let thumbs = product.gallery.map(src => 
        `<img src="${src}" class="thumb-img" loading="lazy" onclick="document.querySelector('.main-modal-img').src='${src}'">`
    ).join('');

    // 4. REVIEWS LOGIC
    let reviewsHTML = '';
    if (product.reviews && product.reviews.length > 0) {
        const reviewsList = product.reviews.map(r => `
            <div class="review-card">
                <div class="review-header">
                    <span>${r.user}</span>
                    <span class="stars">${'★'.repeat(r.rating)}</span>
                </div>
                <div style="color:#555;">"${r.text}"</div>
            </div>
        `).join('');
        
        reviewsHTML = `
            <div class="review-section">
                <div class="review-title">Customer Reviews (${product.reviews.length})</div>
                ${reviewsList}
            </div>
        `;
    } else {
        reviewsHTML = `<div class="review-section" style="color:#777; font-style:italic;">No reviews yet. Be the first to buy!</div>`;
    }

    body.innerHTML = `
        <div class="modal-gallery">
            <img src="${product.img}" alt="${product.name}" class="main-modal-img" loading="lazy" onerror="this.src='https://placehold.co/400x400?text=Handiweave';">
            <div class="thumb-grid">${thumbs}</div>
        </div>
        
        <div class="modal-details">
            <h2>${product.name}</h2>
            
            <div class="modal-price">
                <span style="color:#999; text-decoration:line-through; font-size:1rem; font-weight:normal;">${formatPrice(product.originalPrice)}</span>
                ${formatPrice(product.price)} <span style="font-size:0.6em;font-weight:400;color:#555;">(Inc. GST)</span>
            </div>

            <div class="modal-short-desc">${product.shortDesc}</div>
            <div class="modal-desc">${product.desc}</div>
            
            ${product.inStock ? optionsHTML : ''}
            
            ${product.inStock ? meterHtml : ''}
            
            <div class="action-buttons">
                <button class="add-to-cart-btn" style="flex:2; padding:15px; ${!product.inStock ? 'background:#888;cursor:not-allowed;' : ''}" 
                    onclick="addToCartFromModal(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'ADD TO BAG' : 'OUT OF STOCK'}
                </button>
                <button class="share-btn" onclick="shareProduct(${product.id})">
                    <i class="fas fa-share-alt"></i> Share
                </button>
            </div>

            <div class="modal-care"><strong>Care:</strong> ${product.care}</div>
            
            ${reviewsHTML}
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() { 
    document.getElementById('productModal').style.display = 'none'; 
    document.body.style.overflow = 'auto';
}

// ===== ADD TO CART FROM MODAL (Updated to read Meter Input) =====
function addToCartFromModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Check for Variant
    let selectedVariant = null;
    const variantSelect = document.getElementById('modalVariantSelect');
    if (variantSelect) {
        selectedVariant = variantSelect.value;
    } else if (product.options) {
        selectedVariant = product.options.values[0];
    }

    // Check for Meter/Quantity Input
    let quantity = 1;
    const meterInput = document.getElementById('meterInput');
    if (meterInput) {
        quantity = parseInt(meterInput.value);
        if (quantity < 1) quantity = 1;
    }

    // Check if item already in cart
    const existingItem = cart.find(item => item.id === productId && item.variant === selectedVariant);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.img,
            variant: selectedVariant,
            quantity: quantity
        });
    }

    updateCartCount();
    closeProductModal();
    openCart();
    
    // Show Notification
    const notif = document.getElementById('notification');
    const notifText = document.getElementById('notificationText');
    notifText.innerText = `${quantity} ${quantity > 1 ? 'Meters' : 'Item'} added to bag!`;
    notif.classList.add('show');
    setTimeout(() => { notif.classList.remove('show'); }, 3000);
}
// ===== UPDATED SHARE FUNCTION (Dynamic Name) =====
function shareProduct(productId) {
    // 1. Find the product details using ID
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    // 2. Create a "Slug" from the actual product name
    // It replaces spaces with hyphens (e.g., "Tripple Patti Shawl" becomes "Tripple-Patti-Shawl")
    const slug = product.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    
    // 3. Construct the correct URL
    // This works on both GitHub Pages and Custom Domains
    const path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    const baseUrl = window.location.origin + path;
    
    // Final Link Format: .../shop.html?product=12&item=Product-Name-Here
    const shareUrl = `${baseUrl}shop.html?product=${productId}&item=${slug}`;
    
    // 4. Trigger Share Menu or WhatsApp
    if (navigator.share) {
        navigator.share({
            title: 'Handiweave - ' + product.name,
            text: `Check out ${product.name} on Handiweave!`,
            url: shareUrl
        }).catch(console.error);
    } else {
        const text = `Check out ${product.name} on Handiweave! ${shareUrl}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    }
}
// ===== ADD TO CART FROM MODAL (Final Safe Version) =====
function addToCartFromModal(id) {
    const product = PRODUCTS.find(p => p.id === id);
    // Stock check (Purana logic)
    if (product.inStock === false) return; 

    // 1. Variant Select Logic (Purana)
    let selectedVariant = 'Standard';
    const selectBox = document.getElementById('modalVariantSelect');
    if (selectBox) selectedVariant = selectBox.value;

    // 2. ⭐ NEW METER LOGIC ⭐
    // Default quantity 1 rahegi (Shawls/Stoles ke liye)
    let quantity = 1; 
    
    // Check karega agar Meter Box maujood hai (Sirf Yardage ke liye)
    const meterInput = document.getElementById('meterInput');
    if (meterInput) {
        quantity = parseInt(meterInput.value);
        if (quantity < 1) quantity = 1;
    }

    // 3. Cart Logic
    const existingItem = cart.find(i => i.id === id && i.variant === selectedVariant);

    if (existingItem) {
        // Agar pehle se hai, toh quantity badha do
        existingItem.quantity += quantity;
    } else {
        // Naya item add karo
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            variant: selectedVariant,
            quantity: quantity // Yahan ab sahi quantity jayegi
        });
    }

    // 4. Saving & UI (Tera Purana Code)
    saveCart(); // Ye zaroori tha, wapas daal diya
    closeProductModal();
    
    // Notification mein thoda smartness daal diya
    if(quantity > 1) {
        showNotification(`${quantity} Meters Added to Bag`);
    } else {
        showNotification('Added to Bag');
    }
    
    openCart(); 
}
// ===== CART FUNCTIONS =====
function openCart() {
    renderCartItems();
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderCartItems() {
    const container = document.getElementById('cartItemsList');
    if (!cart.length) {
        container.innerHTML = '<p style="text-align:center;color:#666;">Bag is empty</p>';
        document.getElementById('cartTotalText').textContent = '₹0';
        return;
    }
    container.innerHTML = cart.map((item, idx) => `
        <div style="display:flex; justify-content:space-between; margin-bottom:1rem; border-bottom:1px solid #f0f0f0; padding-bottom:10px;">
            <div style="display:flex; gap:10px;">
                <img src="${item.img}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;" loading="lazy" onerror="this.src='https://placehold.co/100x100?text=HW';">
                <div>
                    <div style="font-weight:600; font-size:0.9rem;">${item.name}</div>
                    <div style="font-size:0.8rem; color:#666;">${item.variant}</div>
                    <div style="font-size:0.8rem;">${formatPrice(item.price)} x ${item.quantity}</div>
                </div>
            </div>
            <div style="display:flex; align-items:center; gap:5px;">
                <button onclick="updateQty(${idx}, -1)" style="width:25px;height:25px;border:none;background:#eee;">-</button>
                <span style="font-size:0.9rem;">${item.quantity}</span>
                <button onclick="updateQty(${idx}, 1)" style="width:25px;height:25px;border:none;background:#eee;">+</button>
                <i class="fas fa-trash" style="color:#d9534f; margin-left:8px; cursor:pointer;" onclick="removeCartItem(${idx})"></i>
            </div>
        </div>
    `).join('');
    document.getElementById('cartTotalText').textContent = formatPrice(getCartTotal());
}

function updateQty(idx, change) {
    cart[idx].quantity += change;
    if (cart[idx].quantity < 1) cart.splice(idx, 1);
    saveCart(); 
    renderCartItems();
}

function removeCartItem(idx) { 
    cart.splice(idx, 1); 
    saveCart(); 
    renderCartItems(); 
}

// ===== CHECKOUT =====
function openCheckout() {
    if(cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    closeCart();
    
    const subtotal = getCartTotal();
    const shipping = calculateShipping();
    const finalTotal = subtotal + shipping;

    let summaryHTML = '<h4>Order Summary</h4>';
    cart.forEach(item => {
        summaryHTML += `<div style="display:flex; justify-content:space-between; margin:5px 0;">
            <span>${item.name} x${item.quantity}</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>`;
    });
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    summaryHTML += `<hr style="margin:10px 0;">
        <div style="display:flex; justify-content:space-between;">
            <span>Subtotal:</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
            <span>Shipping (${totalItems} items):</span>
            <span>${formatPrice(shipping)}</span>
        </div>`;

    document.getElementById('checkoutSummary').innerHTML = summaryHTML;
    document.getElementById('checkoutTotal').textContent = formatPrice(finalTotal);

    document.getElementById('paymentButtons').innerHTML = `
        <button type="button" onclick="checkoutWithRazorpay()" style="background:var(--rzp); color:white; width:100%; padding:15px; border-radius:4px; margin-bottom:10px; border:none; font-weight:bold; cursor:pointer;">
            <i class="fas fa-credit-card"></i> Pay with Razorpay (${formatPrice(finalTotal)})
        </button>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:10px;">
            <button type="button" onclick="initiateUPIPayment('9882212962@upi')" style="background:#34a853; color:white; padding:12px; border-radius:4px; border:none; font-weight:bold; cursor:pointer;">
                <i class="fab fa-google-pay"></i> Google Pay
            </button>
            <button type="button" onclick="initiateUPIPayment('sahik886@okaxis')" style="background:#0080FF; color:white; padding:12px; border-radius:4px; border:none; font-weight:bold; cursor:pointer;">
                <i class="fas fa-university"></i> UPI Apps
            </button>
        </div>
        
        <button type="button" onclick="checkoutWithWhatsApp()" style="background:var(--wa); color:white; width:100%; padding:15px; border-radius:4px; border:none; font-weight:bold; cursor:pointer;">
            <i class="fab fa-whatsapp"></i> Order via WhatsApp
        </button>
    `;

    document.getElementById('checkoutModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function validateCheckoutForm() {
    const requiredFields = [
        {id: 'customerName', name: 'Full Name'},
        {id: 'customerPhone', name: 'Mobile Number'},
        {id: 'addrLine1', name: 'Address'},
        {id: 'addrDistrict', name: 'District'},
        {id: 'addrState', name: 'State'},
        {id: 'addrPin', name: 'Pincode'}
    ];
    
    for (let field of requiredFields) {
        const element = document.getElementById(field.id);
        if (!element || !element.value.trim()) {
            showNotification(`Please fill in ${field.name}`);
            element?.focus();
            return false;
        }
    }
    
    const phone = document.getElementById('customerPhone').value;
    if (!/^[0-9]{10}$/.test(phone)) {
        showNotification('Please enter a valid 10-digit mobile number');
        return false;
    }
    
    return true;
}

// ===== FIXED: RAZORPAY WITH FORMSPREE =====
function checkoutWithRazorpay() {
    if (!validateCheckoutForm()) return;
    
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const email = document.getElementById('customerEmail').value;
    
    const addrLine1 = document.getElementById('addrLine1').value;
    const addrDistrict = document.getElementById('addrDistrict').value;
    const addrState = document.getElementById('addrState').value;
    const addrPin = document.getElementById('addrPin').value;
    const isGift = document.getElementById('isGift').checked ? 'Yes' : 'No';
    
    const fullAddress = `${addrLine1}, ${addrDistrict}, ${addrState} - ${addrPin} (Gift: ${isGift})`;

    const subtotal = getCartTotal();
    const shipping = calculateShipping();
    const finalTotal = subtotal + shipping;
    
    const options = {
        key: RAZORPAY_KEY,
        amount: finalTotal * 100,
        currency: 'INR',
        name: 'Handiweave',
        description: 'Handicraft Purchase',
        handler: function(response) {
            showNotification('Payment successful! Order placed.');
            
            const formData = new FormData();
            formData.append('Order Summary', `ID: ${response.razorpay_payment_id} | Total: ₹${finalTotal} (Ship: ₹${shipping})`);
            formData.append('Cart Items', JSON.stringify(cart));
            formData.append('Customer Details', `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${fullAddress}`);
            
            fetch("https://formspree.io/f/xlgdnggr", { method: "POST", body: formData, headers: {'Accept': 'application/json'} });

            cart = [];
            saveCart();
            updateCartCount();
            closeCheckout();
        },
        prefill: {
            name: name,
            email: email || 'customer@handiweave.com',
            contact: phone
        },
        theme: { color: '#7A5548' },
        modal: {
            ondismiss: function() { showNotification('Payment cancelled'); }
        }
    };
    
    try {
        const rzp = new Razorpay(options);
        rzp.open();
    } catch (error) {
        showNotification('Payment gateway error. Please try UPI or WhatsApp.');
    }
}

// ===== FIXED: UPI WITH FORMSPREE + 2000MS DELAY =====
function initiateUPIPayment(upiId) {
    if (!validateCheckoutForm()) return;
    
    const subtotal = getCartTotal();
    const shipping = calculateShipping();
    const finalTotal = subtotal + shipping;
    
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const email = document.getElementById('customerEmail').value;
    
    const addrLine1 = document.getElementById('addrLine1').value;
    const addrDistrict = document.getElementById('addrDistrict').value;
    const addrState = document.getElementById('addrState').value;
    const addrPin = document.getElementById('addrPin').value;
    const fullAddress = `${addrLine1}, ${addrDistrict}, ${addrState} - ${addrPin}`;

    // 1. Send to Formspree First
    const formData = new FormData();
    formData.append('Order Type', 'UPI / Google Pay Order');
    formData.append('Payment Status', 'Pending (Check Screenshot/Bank)');
    formData.append('Total Amount', `₹${finalTotal} (Ship: ₹${shipping})`);
    formData.append('Customer Details', `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${fullAddress}`);
    formData.append('Items', JSON.stringify(cart.map(i => `${i.name} (${i.quantity})`)));
    
    fetch("https://formspree.io/f/xlgdnggr", { 
        method: "POST", 
        body: formData, 
        headers: {'Accept': 'application/json'} 
    });

    const upiLink = `upi://pay?pa=${upiId}&pn=Handiweave&am=${finalTotal}&cu=INR&tn=Order-${phone}&mc=5411`;
    
    // 2. Open UPI
    window.location.href = upiLink;
    
    // 3. Delay message by 2s so app has time to open
    setTimeout(() => {
        showNotification(`Request sent! Please pay ₹${finalTotal} in your app.`);
        alert(`Order Email Sent to Handiweave!\n\nPlease complete payment of ₹${finalTotal} in your UPI App and share screenshot on WhatsApp if needed.`);
        cart = [];
        saveCart();
        updateCartCount();
        closeCheckout();
    }, 2000);
}

function checkoutWithWhatsApp() {
    if (!validateCheckoutForm()) return;
    
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const email = document.getElementById('customerEmail').value;
    const addrLine1 = document.getElementById('addrLine1').value;
    const addrDistrict = document.getElementById('addrDistrict').value;
    const addrState = document.getElementById('addrState').value;
    const addrPin = document.getElementById('addrPin').value;
    const isGift = document.getElementById('isGift').checked ? 'Yes' : 'No';
    
    const subtotal = getCartTotal();
    const shipping = calculateShipping();
    const finalTotal = subtotal + shipping;
    
    let itemsText = '';
    cart.forEach(item => {
        itemsText += `• ${item.name} (${item.variant}) x${item.quantity}: ₹${item.price * item.quantity}\n`;
    });
    
    const addressText = `Address: ${addrLine1}, ${addrDistrict}, ${addrState} - ${addrPin}\n`;
    
    const message = `*NEW ORDER REQUEST*\n\n*Customer Details:*\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\n${addressText}Gift Wrap: ${isGift}\n\n*Order Items:*\n${itemsText}\n*Order Summary:*\nSubtotal: ₹${subtotal}\nShipping: ₹${shipping}\n*Total: ₹${finalTotal}*\n\nPayment Method: Cash on Delivery / UPI`;
    
    window.open(`https://wa.me/919882212962?text=${encodeURIComponent(message)}`, '_blank');
}

// ===== SEARCH FUNCTION (Fixed for Multi-Page) =====
function searchProducts(event) {
    if (event && event.type === 'keyup' && event.key !== 'Enter') return;
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!searchTerm) return;

    // Redirect to Shop page with search term
    window.location.href = 'shop.html?search=' + encodeURIComponent(searchTerm);
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if(cat === 'all') {
        renderProducts(PRODUCTS);
    } else {
        const filtered = PRODUCTS.filter(p => p.category === cat);
        renderProducts(filtered);
    }
}

function togglePolicy(index) {
    const content = document.querySelectorAll('.policy-content')[index];
    const icon = content.previousElementSibling.querySelector('.fa-chevron-down');
    content.classList.toggle('active');
    icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
}

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    fetch("https://formspree.io/f/xlgdnggr", { 
        method: "POST", body: data, headers: { 'Accept': 'application/json' } 
    })
    .then(r => { 
        if(r.ok) { showNotification('Message sent successfully!'); this.reset(); } 
        else { showNotification('Error sending message'); } 
    })
    .catch(() => showNotification('Error sending message'));
});

document.getElementById('overlay').addEventListener('click', function() {
    closeCart();
    closeCheckout();
    closeProductModal();
});

// ===== HANDLE URL PARAMS (Product & Search) =====
function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    const searchTerm = urlParams.get('search'); // New for search redirection
    
    if (productId) {
        const id = parseInt(productId);
        setTimeout(() => openProductModal(id), 100);
    } 
    
    if (searchTerm) {
        const input = document.getElementById('searchInput');
        if(input) input.value = searchTerm;
        
        const filtered = PRODUCTS.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderProducts(filtered);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        renderProducts();
        updateCartCount();
        handleURLParameters();
    }, 50);

});
