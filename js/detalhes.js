const imoveis = [
    {
        id: "IMV-001",
        titulo: "Casa moderna com 2 quartos",
        preco: "R$ 3.000/mês",
        tipo: "ALUGUEL",
        endereco: "Rua das Palmeiras, 456 - Centro, Florianópolis, SC",
        descricao: "Linda casa moderna localizada em bairro nobre de Florianópolis.",
        fotos: [
            "assets/casa1.jpg",
            "assets/casa2.jpg",
            "assets/apto1.jpg",
            "assets/casa1.jpg"
        ]
    },
    {
        id: "IMV-002",
        titulo: "Apartamento no centro",
        preco: "R$ 350.000",
        tipo: "VENDA",
        endereco: "Av. Central, 1200 - Centro, Florianópolis, SC",
        descricao: "Apartamento no coração da cidade, próximo a tudo.",
        fotos: [
            "assets/apto1.jpg",
            "assets/apto1.jpg",
            "assets/apto1.jpg"
        ]
    },
    {
        id: "IMV-003",
        titulo: "Casa espaçosa com área gourmet",
        preco: "R$ 520.000",
        tipo: "VENDA",
        endereco: "Rua das Acácias, 89 - Jardim, Florianópolis, SC",
        descricao: "Casa ampla, ideal para famílias que gostam de espaço.",
        fotos: [
            "assets/casa2.jpg",
            "assets/casa1.jpg"
        ]
    },
    {
        id: "IMV-004",
        titulo: "Casa confortável 3 quartos",
        preco: "R$ 2.500/mês",
        tipo: "ALUGUEL",
        endereco: "Rua Bela Vista, 300 - São José, SC",
        descricao: "Casa confortável, ótima iluminação natural.",
        fotos: [
            "assets/casa1.jpg",
            "assets/casa2.jpg"
        ]
    },
    {
        id: "IMV-005",
        titulo: "Apartamento moderno 2 quartos",
        preco: "R$ 1.800/mês",
        tipo: "ALUGUEL",
        endereco: "Rua das Flores, 210 - Palhoça, SC",
        descricao: "Apartamento moderno, bem ventilado e funcional.",
        fotos: [
            "assets/apto1.jpg",
            "assets/apto1.jpg"
        ]
    },
    {
        id: "IMV-006",
        titulo: "Casa de praia com vista",
        preco: "R$ 850.000",
        tipo: "VENDA",
        endereco: "Av. Beira-Mar, 45 - Florianópolis, SC",
        descricao: "Casa de alto padrão com vista para o mar.",
        fotos: [
            "assets/casa2.jpg",
            "assets/casa1.jpg"
        ]
    }
];


const params = new URLSearchParams(window.location.search);
const idImovel = params.get("id");


const imovel = imoveis.find(i => i.id === idImovel);


if (imovel) {
    document.getElementById("tituloImovel").textContent = imovel.titulo;
    document.getElementById("precoImovel").textContent = imovel.preco;
    document.getElementById("enderecoImovel").textContent = imovel.endereco;
    document.getElementById("descricaoImovel").textContent = imovel.descricao;
    document.getElementById("codigoImovel").textContent = imovel.id;

    const whatsappLink = document.querySelector(".btn-whatsapp");
    whatsappLink.href =
        `https://wa.me/5548999999999?text=Olá! Tenho interesse no imóvel ${imovel.titulo} (${imovel.id})`;

    // GALERIA
    let fotoAtual = 0;
    const fotoPrincipal = document.getElementById("fotoPrincipal");
    const miniaturas = document.querySelector(".miniaturas");

    fotoPrincipal.src = imovel.fotos[0];
    miniaturas.innerHTML = "";

    imovel.fotos.forEach((foto, index) => {
        const img = document.createElement("img");
        img.src = foto;
        img.onclick = () => trocarFoto(index);
        if (index === 0) img.classList.add("active");
        miniaturas.appendChild(img);
    });

    window.trocarFoto = function (index) {
        fotoAtual = index;
        fotoPrincipal.src = imovel.fotos[index];
        document.querySelectorAll(".miniaturas img").forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    };

    window.nextFoto = function () {
        fotoAtual = (fotoAtual + 1) % imovel.fotos.length;
        trocarFoto(fotoAtual);
    };

    window.prevFoto = function () {
        fotoAtual = (fotoAtual - 1 + imovel.fotos.length) % imovel.fotos.length;
        trocarFoto(fotoAtual);
    };

} else {
    document.querySelector(".detalhes-container").innerHTML =
        "<p>Imóvel não encontrado.</p>";
}


function toggleFavorito() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const index = favoritos.indexOf(idImovel);

    if (index === -1) {
        favoritos.push(idImovel);
        document.getElementById("iconeFavorito").textContent = "❤️";
        document.getElementById("textoFavorito").textContent = "Remover dos Favoritos";
    } else {
        favoritos.splice(index, 1);
        document.getElementById("iconeFavorito").textContent = "🤍";
        document.getElementById("textoFavorito").textContent = "Adicionar aos Favoritos";
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

(function () {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (favoritos.includes(idImovel)) {
        document.getElementById("iconeFavorito").textContent = "❤️";
        document.getElementById("textoFavorito").textContent = "Remover dos Favoritos";
    }
})();
