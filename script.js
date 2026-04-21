// Dados simulados baseados no site original
const products = [
    {
        name: "Apple iPhone 15 (128 GB) - Preto",
        price: 4699.00,
        installments: 10,
        img: "https://http2.mlstatic.com/D_NQ_NP_715311-MLA71782870120_092023-V.webp",
        isFull: true
    },
    {
        name: "Fritadeira Elétrica Air Fryer Mondial New Pratic - 3,5L",
        price: 347.90,
        installments: 10,
        img: "https://http2.mlstatic.com/D_NQ_NP_794269-MLU73105785055_112023-V.webp",
        isFull: true
    },
    {
        name: "Notebook Gamer Acer Nitro 5 Intel Core i5 8GB",
        price: 4299.00,
        installments: 12,
        img: "https://http2.mlstatic.com/D_NQ_NP_612501-MLA53123512702_012023-V.webp",
        isFull: false
    },
    {
        name: "Smart TV 50 Polegadas 4K UHD Samsung Crystal",
        price: 2150.00,
        installments: 10,
        img: "https://http2.mlstatic.com/D_NQ_NP_630663-MLA71337482598_082023-V.webp",
        isFull: true
    },
    {
        name: "SSD 480GB Kingston A400 SATA III",
        price: 215.90,
        installments: 3,
        img: "https://http2.mlstatic.com/D_NQ_NP_918512-MLA32731813733_112019-V.webp",
        isFull: true
    }
];

const grid = document.getElementById('product-grid');

function renderProducts() {
    products.forEach(p => {
        const installValue = (p.price / p.installments).toFixed(2).replace('.', ',');
        
        const card = `
            <a href="#" class="ml-card">
                <div class="ml-card-img">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <div class="ml-card-info">
                    <div class="ml-price">R$ ${p.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</div>
                    <div class="ml-installments">em ${p.installments}x R$ ${installValue} sem juros</div>
                    <div class="ml-shipping">Frete grátis ${p.isFull ? '<span class="ml-full">⚡ FULL</span>' : ''}</div>
                    <p class="ml-product-name">${p.name}</p>
                </div>
            </a>
        `;
        grid.innerHTML += card;
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);