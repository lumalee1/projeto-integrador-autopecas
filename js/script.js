// Função de filtro por palavra-chave
function filtrarConteudo() {
    const termo = document.getElementById('searchInput').value.toLowerCase();
    const itens = document.querySelectorAll('.item-busca');

    itens.forEach(item => {
        const texto = item.innerText.toLowerCase();
        if (texto.includes(termo)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Salvamento da Ficha do Cliente (Agora mostra na tela)
function salvarNota(event) {
    event.preventDefault(); // Evita recarregar a página
    
    // Pega os valores digitados
    const nome = document.getElementById('nomeCliente').value;
    const cpf = document.getElementById('cpfCliente').value || "Não informado";
    const carro = document.getElementById('carroCliente').value || "Não informado";
    const obs = document.getElementById('obsCliente').value || "Sem observações";

    // Cria um visual de ficha (Card) e coloca na tela
    const fichaHTML = `
        <div class="card p-3 mb-3 nota-salva shadow-sm">
            <h4 class="h6 fw-bold mb-1 text-primary">👤 Cliente: ${nome}</h4>
            <p class="mb-1 small"><strong>CPF:</strong> ${cpf} | <strong>Veículo:</strong> ${carro}</p>
            <p class="mb-0 text-muted small"><strong>Obs:</strong> ${obs}</p>
        </div>
    `;
    
    // Adiciona a ficha na lista
    const lista = document.getElementById('listaFichas');
    lista.insertAdjacentHTML('afterbegin', fichaHTML);

    // Mostra mensagem de sucesso
    const msg = document.getElementById('mensagemSalvo');
    msg.classList.remove('d-none');
    
    // Limpa o formulário e esconde a mensagem após 3 segundos
    document.getElementById('clientForm').reset();
    setTimeout(() => {
        msg.classList.add('d-none');
    }, 3000);
}

// Consultor de descarte ambiental (Agora mais destacado)
function consultarDestino() {
    const valor = document.getElementById('selectResiduo').value;
    const box = document.getElementById('resultadoDestino');
    const titulo = document.getElementById('tituloDestino');
    const desc = document.getElementById('descricaoDestino');

    // Exibe a caixa de resultado
    box.classList.remove('d-none');

    // Define o texto baseado na seleção
    if (valor === 'baterias_velhas') {
        titulo.innerText = "♻️ Procedimento: Logística Reversa Obrigatória";
        desc.innerText = "As cascas e baterias substituídas contêm chumbo e ácido. Devem ser armazenadas na contenção da oficina e devolvidas diretamente ao fornecedor de baterias na entrega do novo lote, emitindo o comprovante de reciclagem.";
    } else if (valor === 'placas_eletronicas') {
        titulo.innerText = "♻️ Procedimento: Coleta Eletrônica Especializada";
        desc.innerText = "Evite deixar placas e módulos acumulados indefinidamente no estoque. Solicite o recolhimento via Ecoponto Municipal ou empresa de reciclagem de eletrônicos cadastrada.";
    } else if (valor === 'cabos_fios') {
        titulo.innerText = "♻️ Procedimento: Caixa Coletora Interna";
        desc.innerText = "Deposite na caixa coletora amarela do setor de TI/Estoque. Os fios contêm cobre reciclável e devem ser entregues a cooperativas autorizadas.";
    }
}