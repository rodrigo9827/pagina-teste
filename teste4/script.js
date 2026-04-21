const products = [
    { name: "Samsung Galaxy S24 Ultra", oldPrice: 9499, price: 7899, discount: 16, img: "https://http2.mlstatic.com/D_NQ_NP_715311-MLA71782870120_092023-V.webp" },
    { name: "Fritadeira Elétrica Mondial", oldPrice: 450, price: 329, discount: 26, img: "https://http2.mlstatic.com/D_NQ_NP_794269-MLU73105785055_112023-V.webp" },
    { name: "Smart TV 55' Samsung 4K", oldPrice: 3100, price: 2450, discount: 20, img: "https://http2.mlstatic.com/D_NQ_NP_630663-MLA71337482598_082023-V.webp" },
    { name: "Notebook Acer Nitro 5", oldPrice: 5200, price: 4199, discount: 19, img: "https://http2.mlstatic.com/D_NQ_NP_612501-MLA53123512702_012023-V.webp" }
];

const grid = document.getElementById('productGrid');

function nav(page) {
    console.log("Navegando para:", page);
}

function render(list) {
    grid.innerHTML = '';
    list.forEach(p => {
        grid.innerHTML += `
            <div class="ml-card clickable" onclick="nav('${p.name}')">
                <img src="${p.img}" alt="${p.name}">
                <div style="margin-top:10px">
                    <span style="font-size: 12px; color: #999; text-decoration: line-through;">R$ ${p.oldPrice.toLocaleString('pt-br')}</span>
                    <div style="display:flex; align-items:center;">
                        <span style="font-size: 24px;">R$ ${p.price.toLocaleString('pt-br')}</span>
                        <span class="discount">${p.discount}% OFF</span>
                    </div>
                    <p class="shipping">Frete grátis</p>
                    <p style="font-size: 14px; color: #666; margin-top:5px;">${p.name}</p>
                </div>
            </div>
        `;
    });
}

// Banner
let currentSlide = 0;
const slides = ["https://http2.mlstatic.com/D_NQ_938171-MLA74838634591_032024-OO.webp", "https://http2.mlstatic.com/D_NQ_751505-MLA74838634591_032024-OO.webp"];
document.getElementById('nextBtn').onclick = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    document.getElementById('bannerImg').src = slides[currentSlide];
};

render(products);