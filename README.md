# 🏠 Search&Imóveis

Site completo de imobiliária desenvolvido com HTML, CSS e JavaScript puro, com backend em Python para integração com WhatsApp, focado em apresentar imóveis para aluguel e venda na região de Florianópolis/SC.

## 🌐 Demo Online

🔗 **Acesse o site:** []

---

## 📖 Sobre o Projeto

O **Search&Imóveis** é um site institucional moderno para uma corretora de imóveis, desenvolvido para proporcionar uma experiência completa aos usuários que buscam seu próximo lar ou investimento.

O projeto nasceu da necessidade de criar uma plataforma simples, mas funcional, que permita aos visitantes navegar pelo catálogo de imóveis, conhecer detalhes específicos de cada propriedade e entrar em contato facilmente com a corretora.

---

## 🎯 Objetivo

Criar um site intuitivo e responsivo que:
- Apresente os imóveis disponíveis de forma atrativa
- Facilite a busca através de filtros práticos
- Permita que usuários salvem seus imóveis favoritos
- Ofereça múltiplos canais de contato
- Funcione perfeitamente em qualquer dispositivo

---

## ✨ O que o site oferece

### Para o usuário:
- **Navegação simples** entre páginas bem estruturadas
- **Sistema de filtros** para encontrar o imóvel ideal rapidamente
- **Galeria de fotos** interativa em cada imóvel
- **Sistema de favoritos** para salvar imóveis de interesse
- **Informações completas** com características, localização e preços
- **Contato direto** via WhatsApp, email ou telefone
- **Notificação automática** via WhatsApp ao enviar o formulário de contato

### Para a imobiliária:
- **Presença digital profissional** com design moderno
- **Vitrine de imóveis** organizada e atrativa
- **Formulário de contato** que envia mensagens diretamente por email e WhatsApp
- **Responsividade total** para alcançar clientes mobile
- **Fácil manutenção** sem necessidade de banco de dados complexo

---

## 📄 Páginas do Site

### 🏡 Página Inicial (Home)
A porta de entrada do site, com um banner impactante destacando a proposta da imobiliária e cards dos imóveis em destaque. Design limpo e chamadas para ação claras que direcionam o usuário para o catálogo.

### 🔍 Imóveis
O coração do site, onde todos os 6 imóveis cadastrados são exibidos em cards elegantes. Possui um sistema de filtros no topo que permite filtrar por:
- **Tipo:** Casa, Apartamento ou Kitnet
- **Finalidade:** Aluguel ou Venda
- **Preço:** Diferentes faixas de valor

Os resultados são filtrados instantaneamente sem recarregar a página.

### 📄 Detalhes do Imóvel
Página completa dedicada a cada propriedade, incluindo:
- Galeria de fotos navegável com miniaturas
- Todas as especificações (quartos, banheiros, vagas, área)
- Descrição detalhada
- Lista de características e diferenciais
- Informações de IPTU e condomínio
- Mapa da localização via Google Maps
- Botões de contato direto
- Sistema de favoritos
- Sugestões de imóveis similares

### ❤️ Favoritos
Página exclusiva que lista todos os imóveis que o usuário salvou como favoritos. Os dados são armazenados localmente no navegador, permitindo que o usuário continue de onde parou mesmo após fechar o site.

Cada card possui:
- Informações resumidas do imóvel
- Botão para ver detalhes completos
- Botão para remover dos favoritos

### 📞 Contato
Formulário completo de contato com:
- Campos para nome, email, telefone, assunto e mensagem
- Validação de campos obrigatórios
- Integração com FormSubmit para envio direto ao email
- Envio automático de mensagem de confirmação via Twilio WhatsApp API
- Cards informativos com telefones, endereço e horário de atendimento
- Mensagem de confirmação após envio bem-sucedido

### 👥 Sobre Nós
Página institucional que apresenta a empresa, sua missão, visão, valores e equipe. Ideal para construir confiança e credibilidade com potenciais clientes.

---

## 💡 Diferenciais do Projeto

### 🎨 Design Moderno e Atrativo
Interface limpa com paleta de cores profissional (azul, amarelo e branco), tipografia legível e espaçamento bem planejado. Cada elemento foi pensado para guiar o usuário naturalmente pela jornada de navegação.

### 📱 100% Responsivo
O site se adapta perfeitamente a qualquer tamanho de tela:
- Desktop (experiência completa com grid de múltiplas colunas)
- Tablet (layout otimizado para touch)
- Mobile (menu hambúrguer, cards empilhados, navegação simplificada)

### ⚡ Performance
Sem dependências externas pesadas, o site carrega rapidamente. Todo o JavaScript é vanilla (puro), sem frameworks que aumentariam o tamanho dos arquivos.

### 🎯 Experiência do Usuário (UX)
- Animações suaves ao scroll
- Feedback visual em todos os botões e interações
- Notificações informativas
- Navegação intuitiva com breadcrumbs
- Estados de hover bem definidos

### 💾 Sistema de Favoritos Inteligente
Utiliza localStorage do navegador para salvar preferências do usuário sem necessidade de login ou banco de dados. Simples, eficaz e com sincronização automática entre páginas.

### 🔄 Carregamento Dinâmico
Cada imóvel carrega seus dados específicos através da URL (ex: `detalhes.html?id=IMV-001`), permitindo que diferentes propriedades sejam exibidas na mesma estrutura de página.

### 📲 Notificação via WhatsApp
Ao enviar o formulário de contato, o usuário recebe automaticamente uma mensagem de confirmação no WhatsApp via Twilio API, proporcionando uma experiência mais completa e profissional.

---

## 🛠️ Tecnologias e Recursos

**Frontend:**
- HTML5 semântico para melhor SEO
- CSS3 com variáveis, flexbox e grid
- JavaScript vanilla para lógica e interatividade

**Backend:**
- Python 3.12 com Flask para servidor de notificações
- Flask-CORS para comunicação entre frontend e backend

**APIs:**
- Twilio WhatsApp API — envia mensagem automática de confirmação ao usuário após preenchimento do formulário de contato
- Google Maps Embed — exibe localização dos imóveis via iframe

**Integrações:**
- FormSubmit — envio do formulário de contato direto para email, sem backend próprio
- WhatsApp Business Link via wa.me/ — botão de contato direto que abre conversa no WhatsApp

**Armazenamento:**
- LocalStorage para sistema de favoritos
- Objetos JavaScript para dados dos imóveis

**Segurança:**
- Variáveis de ambiente via .env para proteção das credenciais da API

---

## 🎨 Identidade Visual

O projeto utiliza uma paleta de cores que transmite profissionalismo e confiança:

- **Azul Principal (#0b2893):** Seriedade e credibilidade
- **Azul Escuro (#032147):** Sofisticação e elegância  
- **Amarelo (#FFD600):** Energia e destaque para CTAs
- **Branco e cinza claro:** Limpeza e modernidade

---

## 📊 Dados do Catálogo

Atualmente o site apresenta **6 imóveis cadastrados:**

1. **Casa moderna com 2 quartos** - Aluguel R$ 3.000/mês
2. **Apartamento no centro** - Venda R$ 350.000
3. **Casa espaçosa com área gourmet** - Venda R$ 520.000
4. **Casa confortável 3 quartos** - Aluguel R$ 2.500/mês
5. **Apartamento moderno 2 quartos** - Aluguel R$ 1.800/mês
6. **Casa de praia com vista** - Venda R$ 850.000

Cada imóvel possui informações completas de endereço, características, fotos e descrição detalhada.

---

## 🚀 Evolução do Projeto

O projeto iniciou como um site estático 100% frontend e evoluiu com a adição de um backend Python para integração com a Twilio WhatsApp API, tornando-o uma aplicação fullstack simples, ideal para:

- **Protótipo inicial** de uma imobiliária
- **Base sólida** para futuras expansões
- **Portfólio** de desenvolvimento web

---

## 📍 Informações da Imobiliária

**Nome:** Search&Imóveis  
**Localização:** Florianópolis, Santa Catarina  
**Atuação:** Grande Florianópolis  
**Segmento:** Aluguel e Venda de Imóveis Residenciais

**Contatos:**
- 📧 contato@searchimoveis.com.br
- 📱 (48) 99999-9999
- ☎️ (48) 3234-5678
- 📍 Rua das Flores, 123 - Centro, Florianópolis/SC

**Horário de Atendimento:**
- Segunda a Sexta: 9h às 18h
- Sábado: 9h às 13h

---

## 🎓 Aprendizados e Desafios

Este projeto foi uma oportunidade de trabalhar com:
- Estruturação de site multi-páginas
- Sistema de roteamento via query parameters
- Gerenciamento de estado com localStorage
- Manipulação avançada do DOM
- Design responsivo com mobile-first approach
- Integração com Twilio WhatsApp API
- Criação de backend com Python e Flask
- Proteção de credenciais com variáveis de ambiente (.env)
- Otimização de performance
- Boas práticas de código limpo

Os principais desafios superados foram:
- Sincronização do sistema de favoritos entre páginas
- Carregamento dinâmico de dados sem backend
- Criação de filtros eficientes
- Garantir responsividade perfeita em todos os dispositivos
- Configuração do backend Python para comunicação com o frontend
- Proteção das credenciais da API com .env e .gitignore

**Desenvolvido com dedicação para oferecer a melhor experiência imobiliária online! 🏠❤️**