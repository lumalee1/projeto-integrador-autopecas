// 1. Lógica para alternar entre as telas (DOM)
function abrirTela(idTela) {
    // Esconde todas as telas
    const telas = document.querySelectorAll('.screen');
    telas.forEach(tela => tela.classList.remove('active'));
    
    // Mostra a tela desejada
    const telaAlvo = document.getElementById(idTela);
    if(telaAlvo) {
        telaAlvo.classList.add('active');
    }

    // Limpa o resultado do consultor ao sair da tela
    document.getElementById('resultado-descarte').style.display = 'none';
}

// 2. Lógica do Consultor de Descarte (Switch/Case)
function consultarDescarte() {
    const select = document.getElementById('residuo');
    const valor = select.value;
    const boxResultado = document.getElementById('resultado-descarte');
    const textoResultado = document.getElementById('texto-resultado');

    if (valor === "") {
        boxResultado.style.display = 'block';
        boxResultado.classList.add('error');
        textoResultado.innerHTML = "Por favor, selecione um item na lista acima.";
        return;
    }

    boxResultado.classList.remove('error');
    boxResultado.style.display = 'block';

    switch (valor) {
        case 'bateria':
            textoResultado.innerHTML = "Entregue para o Gerente. Este item exige <strong>LOGÍSTICA REVERSA</strong> e será devolvido ao fabricante/fornecedor.";
            break;
        case 'pilhas':
            textoResultado.innerHTML = "Coloque na <strong>Caixa do E-Lixo</strong> no balcão. Serão levadas ao ecoponto municipal. Não jogue no lixo comum!";
            break;
        case 'cabos':
            textoResultado.innerHTML = "Coloque na <strong>Caixa do E-Lixo</strong>. Se estiverem em bom estado, separe para doação/reutilização na oficina.";
            break;
        case 'placas':
            textoResultado.innerHTML = "Coloque na <strong>Caixa do E-Lixo</strong>. Elas contêm metais pesados e não podem ir para o lixo comum.";
            break;
        case 'monitores':
            textoResultado.innerHTML = "Cuidado com o vidro! Entregue ao Gerente, pois telas exigem descarte especializado em ecopontos específicos da cidade.";
            break;
        default:
            textoResultado.innerHTML = "Opção não reconhecida.";
    }
}