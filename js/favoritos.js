
const imoveisData = {
    'IMV-001': {
        titulo: 'Casa moderna com 2 quartos',
        preco: 'R$ 3.000/mês',
        tipo: 'ALUGUEL',
        endereco: 'Rua das Palmeiras, 456 - Centro, Florianópolis, SC',
        quartos: 2,
        banheiros: 2,
        vagas: 2,
        area: '120m²',
        descricao: 'Linda casa moderna localizada em bairro nobre de Florianópolis. O imóvel conta com acabamento de primeira qualidade, ampla sala de estar com pé direito alto, cozinha planejada completa, 2 suítes com armários embutidos, área de serviço, quintal com churrasqueira e garagem coberta para 2 carros.',
        fotos: ['assets/casa1.jpg', 'assets/casa2.jpg', 'assets/apto1.jpg', 'assets/casa1.jpg'],
        caracteristicas: [
            '✓ Churrasqueira',
            '✓ Armários na cozinha',
            '✓ Quintal',
            '✓ Área de serviço',
            '✓ Garagem coberta',
            '✓ Portão eletrônico',
            '✓ Aceita pets',
            '✓ Piso cerâmico'
        ],
        iptu: 'R$ 120/mês',
        condominio: 'Não há',
        disponivel: 'Imediato'
    },
    'IMV-002': {
        titulo: 'Apartamento no centro',
        preco: 'R$ 350.000',
        tipo: 'VENDA',
        endereco: 'Avenida Central, 789 - Centro, Florianópolis, SC',
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        area: '65m²',
        descricao: 'Apartamento bem localizado no centro da cidade, próximo a comércio, restaurantes e transporte público. Possui sala ampla, cozinha americana, 2 quartos com armários embutidos, banheiro social e vaga de garagem coberta. Prédio com elevador e portaria 24h.',
        fotos: ['assets/apto1.jpg', 'assets/casa1.jpg', 'assets/casa2.jpg', 'assets/apto1.jpg'],
        caracteristicas: [
            '✓ Elevador',
            '✓ Portaria 24h',
            '✓ Cozinha americana',
            '✓ Armários embutidos',
            '✓ Garagem coberta',
            '✓ Sacada',
            '✓ Aceita financiamento',
            '✓ Piso laminado'
        ],
        iptu: 'R$ 80/mês',
        condominio: 'R$ 350/mês',
        disponivel: 'Imediato'
    },
    'IMV-003': {
        titulo: 'Casa espaçosa com área gourmet',
        preco: 'R$ 520.000',
        tipo: 'VENDA',
        endereco: 'Rua dos Pinheiros, 321 - Itacorubi, Florianópolis, SC',
        quartos: 3,
        banheiros: 3,
        vagas: 3,
        area: '180m²',
        descricao: 'Casa ampla e moderna em condomínio fechado. Possui 3 suítes, sala de estar e jantar integradas, cozinha planejada, lavabo, área gourmet completa com churrasqueira e forno de pizza, quintal e garagem para 3 carros. Acabamento de alto padrão.',
        fotos: ['assets/casa2.jpg', 'assets/casa1.jpg', 'assets/apto1.jpg', 'assets/casa2.jpg'],
        caracteristicas: [
            '✓ Condomínio fechado',
            '✓ Área gourmet',
            '✓ Churrasqueira e forno',
            '✓ 3 suítes',
            '✓ Cozinha planejada',
            '✓ Quintal amplo',
            '✓ Segurança 24h',
            '✓ Piscina no condomínio'
        ],
        iptu: 'R$ 200/mês',
        condominio: 'R$ 450/mês',
        disponivel: '30 dias'
    },
    'IMV-004': {
        titulo: 'Casa confortável 3 quartos',
        preco: 'R$ 2.500/mês',
        tipo: 'ALUGUEL',
        endereco: 'Rua das Acácias, 150 - Kobrasol, São José, SC',
        quartos: 3,
        banheiros: 2,
        vagas: 2,
        area: '110m²',
        descricao: 'Casa confortável em bairro residencial tranquilo. Possui 3 quartos sendo 1 suíte, sala ampla, cozinha com armários, área de serviço, garagem coberta para 2 carros e pequeno quintal. Próximo a escolas e supermercados.',
        fotos: ['assets/casa1.jpg', 'assets/casa2.jpg', 'assets/casa1.jpg', 'assets/apto1.jpg'],
        caracteristicas: [
            '✓ 3 quartos (1 suíte)',
            '✓ Armários na cozinha',
            '✓ Quintal',
            '✓ Garagem coberta',
            '✓ Área de serviço',
            '✓ Portão eletrônico',
            '✓ Aceita pets',
            '✓ Bairro residencial'
        ],
        iptu: 'R$ 100/mês',
        condominio: 'Não há',
        disponivel: 'Imediato'
    },
    'IMV-005': {
        titulo: 'Apartamento moderno 2 quartos',
        preco: 'R$ 1.800/mês',
        tipo: 'ALUGUEL',
        endereco: 'Rua Principal, 555 - Pagani, Palhoça, SC',
        quartos: 2,
        banheiros: 1,
        vagas: 1,
        area: '55m²',
        descricao: 'Apartamento moderno em prédio novo, com acabamento de qualidade. Possui 2 quartos, sala integrada com cozinha americana, banheiro social, área de serviço e vaga de garagem. Prédio com salão de festas e churrasqueira.',
        fotos: ['assets/apto1.jpg', 'assets/casa1.jpg', 'assets/casa2.jpg', 'assets/apto1.jpg'],
        caracteristicas: [
            '✓ Prédio novo',
            '✓ Cozinha americana',
            '✓ Salão de festas',
            '✓ Churrasqueira coletiva',
            '✓ Portaria',
            '✓ Garagem coberta',
            '✓ Próximo ao centro',
            '✓ Acabamento moderno'
        ],
        iptu: 'R$ 60/mês',
        condominio: 'R$ 280/mês',
        disponivel: 'Imediato'
    },
    'IMV-006': {
        titulo: 'Casa de praia com vista',
        preco: 'R$ 850.000',
        tipo: 'VENDA',
        endereco: 'Avenida Beira Mar, 1200 - Ingleses, Florianópolis, SC',
        quartos: 4,
        banheiros: 3,
        vagas: 3,
        area: '200m²',
        descricao: 'Casa maravilhosa a 200m da praia, com vista para o mar. Possui 4 quartos sendo 2 suítes, ampla sala com varanda, cozinha completa, área gourmet, piscina, jardim e garagem para 3 carros. Perfeita para lazer e moradia.',
        fotos: ['assets/casa2.jpg', 'assets/casa1.jpg', 'assets/apto1.jpg', 'assets/casa2.jpg'],
        caracteristicas: [
            '✓ Vista para o mar',
            '✓ Piscina privativa',
            '✓ Área gourmet',
            '✓ 4 quartos (2 suítes)',
            '✓ Próximo à praia',
            '✓ Jardim',
            '✓ Churrasqueira',
            '✓ Aceita financiamento'
        ],
        iptu: 'R$ 250/mês',
        condominio: 'Não há',
        disponivel: 'Imediato'
    }
};


function getFavoritos() {
    try {
        return JSON.parse(localStorage.getItem('favoritos')) || [];
    } catch (e) {
        console.error('Erro ao ler favoritos:', e);
        return [];
    }
}


function removerFavorito(id) {
    console.log('🗑️ Removendo favorito:', id);
    
    let favoritos = getFavoritos();
    favoritos = favoritos.filter(favId => favId !== id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    
    console.log('✅ Favorito removido! Lista atualizada:', favoritos);
    
    mostrarNotificacao('Imóvel removido dos favoritos');
    
    carregarFavoritos();
}


function carregarFavoritos() {
    console.log('🔄 Carregando favoritos...');
    
    const lista = document.getElementById('listaFavoritos');
    const mensagemVazia = document.getElementById('mensagemVazia');
    

    console.log('📍 Elemento lista existe?', !!lista);
    console.log('📍 Elemento mensagemVazia existe?', !!mensagemVazia);
    
    const favoritos = getFavoritos();

    console.log('📋 Favoritos encontrados:', favoritos);
    console.log('📊 Total de favoritos:', favoritos.length);


    if (lista) {
        lista.innerHTML = '';
    }


    if (favoritos.length === 0) {
        if (lista) lista.style.display = 'none';
        if (mensagemVazia) mensagemVazia.style.display = 'block';
        console.log('ℹ️ Nenhum favorito para exibir - mostrando mensagem vazia');
        return;
    }


    if (lista) lista.style.display = 'grid';
    if (mensagemVazia) mensagemVazia.style.display = 'none';
    
    console.log('✅ Lista visível, mensagem escondida');


    let renderizados = 0;
    favoritos.forEach((id, index) => {
        console.log(`\n--- Processando favorito ${index + 1}/${favoritos.length} ---`);
        console.log('🔑 ID:', id);
        
        const imovel = imoveisData[id];
        console.log('🏠 Imóvel encontrado?', !!imovel);
        

        if (imovel) {
            console.log(`✅ Renderizando imóvel ${id}:`, imovel.titulo);
            console.log('📷 Foto:', imovel.fotos[0]);
            console.log('💰 Preço:', imovel.preco);
            
            const card = document.createElement('div');
            card.className = 'card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            card.innerHTML = `
                <img src="${imovel.fotos[0]}" alt="${imovel.titulo}">
                <div class="card-content">
                    <h3>${imovel.titulo}</h3>
                    <p class="preco">🏷️ ${imovel.tipo} - ${imovel.preco}</p>
                    <p class="detalhes">📍 ${imovel.endereco}</p>
                    
                    <div class="caracteristicas-mini" style="display: flex; gap: 15px; margin: 10px 0; font-size: 0.9rem; color: #666;">
                        <span>🛏️ ${imovel.quartos}</span>
                        <span>🚿 ${imovel.banheiros}</span>
                        <span>🚗 ${imovel.vagas}</span>
                        <span>📏 ${imovel.area}</span>
                    </div>
                    
                    <div style="display: flex; gap: 10px; margin-top: 15px;">
                        <a href="detalhes.html?id=${id}" class="btn" style="flex: 1;">Ver detalhes</a>
                        <button class="btn-remover" onclick="removerFavorito('${id}')" style="background: #dc3545; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: bold;">
                            ❌ Remover
                        </button>
                    </div>
                </div>
            `;
            
            if (lista) {
                lista.appendChild(card);
                renderizados++;
                console.log(`📦 Card adicionado ao DOM (${renderizados}/${favoritos.length})`);
            }
            

            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * (index + 1));
        } else {
            console.warn(`⚠️ Imóvel ${id} não encontrado no banco de dados`);
            console.log('🔍 IDs disponíveis:', Object.keys(imoveisData));
        }
    });
    
    console.log(`\n✅ Finalizado! ${renderizados} de ${favoritos.length} imóveis renderizados!`);
    console.log('📦 Total de cards no DOM:', lista?.children.length || 0);
}


function mostrarNotificacao(mensagem) {

    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao';
    notificacao.textContent = mensagem;
    notificacao.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #dc3545;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notificacao)) {
                document.body.removeChild(notificacao);
            }
        }, 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('❤️ Página de favoritos carregada!');
    carregarFavoritos();
    
    const favoritos = getFavoritos();
    console.log('📋 Favoritos salvos:', favoritos);
});