
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    if (nav) {
        nav.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    

    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('mainNav');
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
    

    document.addEventListener('click', (e) => {
        const nav = document.getElementById('mainNav');
        const toggle = document.querySelector('.menu-toggle');
        
        if (nav && toggle) {
            if (!nav.contains(e.target) && !toggle.contains(e.target)) {
                nav.classList.remove('active');
            }
        }
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});


function filtrarImoveis(event) {
    event.preventDefault();

    const tipo = document.getElementById('filtro-tipo').value;
    const finalidade = document.getElementById('filtro-finalidade').value;
    const preco = document.getElementById('filtro-preco').value;

    const cards = document.querySelectorAll('.lista-imoveis .card');

    cards.forEach(card => {
        const cardTipo = card.dataset.tipo;
        const cardFinalidade = card.dataset.finalidade;
        const cardPreco = Number(card.dataset.preco);

        let mostrar = true;

        if (tipo !== "" && tipo !== cardTipo) {
            mostrar = false;
        }

        if (finalidade !== "" && finalidade !== cardFinalidade) {
            mostrar = false;
        }

        if (preco !== "") {
            switch (preco) {
                case "1000":
                    if (cardPreco > 1000) mostrar = false;
                    break;
                case "3000":
                    if (cardPreco > 3000) mostrar = false;
                    break;
                case "5000":
                    if (cardPreco > 5000) mostrar = false;
                    break;
                case "mais":
                    if (cardPreco <= 5000) mostrar = false;
                    break;
            }
        }

        if (mostrar) {
            card.style.display = "block";

            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 10);
        } else {
            card.style.display = "none";
        }
    });


    const listaImoveis = document.querySelector('.lista-imoveis');
    if (listaImoveis) {
        listaImoveis.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (!nome || !email || !telefone || !assunto || !mensagem) {
            e.preventDefault();
            alert('⚠️ Por favor, preencha todos os campos obrigatórios!');
        }
    });
}


function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return page || 'index.html';
}

window.addEventListener('DOMContentLoaded', () => {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});