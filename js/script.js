
// Distância de durabilidade dos pneus e kit de relação
const durabilidadeKm = 25000; // 25.000 km
const durabilidadeOleoKm = 1000; // 1.000 km para troca de óleo

let modeloSelecionado = ""; // Variável global para armazenar o modelo selecionado

// Consumo padrão dos modelos
const consumos = {
    "Cg-160": 40, // Consumo em km/l
    "Factor-150": 35,
    "CB-Twister-250": 28,
};

// Função para calcular gastos
function calcularGastos() {
    const quilometragemDiaria = parseFloat(document.getElementById('quilometragem').value);
    const oleo = parseFloat(document.getElementById('oleo').value);
    const pneus = parseFloat(document.getElementById('pneus').value);
    const combu = parseFloat(document.getElementById('combu').value);
    const relacao = parseFloat(document.getElementById('rela').value);
    const precoCombustivel = parseFloat(document.getElementById('combu').value); // Preço do combustível inserido pelo usuário

    if (!modeloSelecionado || isNaN(quilometragemDiaria) || quilometragemDiaria <= 0) {
        alert('Por favor, selecione um modelo e insira uma quilometragem diária válida.');
        return;
    } else if (isNaN(oleo) || oleo <= 0) {
        alert('Por favor, insira um valor para o valor do óleo.');
        return;
    } else if (isNaN(pneus) || pneus <= 0) {
        alert('Por favor, insira um valor para pneus.');
        return;
    } else if (isNaN(combu) || combu <= 0) {
        alert('Por favor, insira um valor para combustível atual.');
        return;
    } else if (isNaN(relacao) || relacao <= 0) {
        alert('Por favor, insira um valor para relação.');
        return;
    } else if (isNaN(precoCombustivel) || precoCombustivel <= 0) {
        alert('Por favor, insira um valor válido para o preço do combustível.');
        return;
    } else {
        alert('Calculando...');
    }

    const consumo = consumos[modeloSelecionado]; // Usando o consumo do modelo selecionado

    // Cálculos baseados na quilometragem mensal
    const quilometragemMensal = quilometragemDiaria * 30; // Aproximando 30 dias no mês

    // Cálculo de gastos com relação
    const gastosRelacaoMensal = (relacao / durabilidadeKm) * quilometragemMensal; // Custo mensal baseado na durabilidade
    const gastosRelacaoAnual = gastosRelacaoMensal * 12;
    const gastosRelacaoDiario = gastosRelacaoMensal / 30; // Custo diário
    const gastosRelacaoSemanal = gastosRelacaoDiario * 7; // Custo semanal

    // Cálculo de gastos com pneus
    const gastosPneuMensal = (pneus / durabilidadeKm) * quilometragemMensal; // Custo mensal baseado na durabilidade
    const gastosPneuAnual = gastosPneuMensal * 12;
    const gastosPneuDiario = gastosPneuMensal / 30; // Custo diário
    const gastosPneuSemanal = gastosPneuDiario * 7; // Custo semanal

    // Cálculo de gastos com combustível
    const litrosDiarios = quilometragemDiaria / consumo;
    const gastosCombustivelDiario = litrosDiarios * precoCombustivel;
    const gastosCombustivelSemanal = gastosCombustivelDiario * 7;
    const gastosCombustivelMensal = gastosCombustivelDiario * 30; // Aproximadamente 30 dias
    const gastosCombustivelAnual = gastosCombustivelMensal * 12;

    // Cálculo de gastos com óleo
    const gastosOleoMensal = (quilometragemMensal / durabilidadeOleoKm) * oleo; // Custo mensal baseado na troca a cada 1000 km
    const gastosOleoAnual = gastosOleoMensal * 12;
    const gastosOleoDiario = gastosOleoMensal / 30; // Custo diário
    const gastosOleoSemanal = gastosOleoDiario * 7; // Custo semanal

    // Atualizando a interface com os resultados
    return {
        relacaoDiario: gastosRelacaoDiario.toFixed(2).replace('.', ','),
        relacaoSemanal: gastosRelacaoSemanal.toFixed(2).replace('.', ','),
        relacaoMensal: gastosRelacaoMensal.toFixed(2).replace('.', ','),
        relacaoAnual: gastosRelacaoAnual.toFixed(2).replace('.', ','),
        pneuDiario: gastosPneuDiario.toFixed(2).replace('.', ','),
        pneuSemanal: gastosPneuSemanal.toFixed(2).replace('.', ','),
        pneuMensal: gastosPneuMensal.toFixed(2).replace('.', ','),
        pneuAnual: gastosPneuAnual.toFixed(2).replace('.', ','),
        combustivelDiario: gastosCombustivelDiario.toFixed(2).replace('.', ','),
        combustivelSemanal: gastosCombustivelSemanal.toFixed(2).replace('.', ','),
        combustivelMensal: gastosCombustivelMensal.toFixed(2).replace('.', ','),
        combustivelAnual: gastosCombustivelAnual.toFixed(2).replace('.', ','),
        oleoDiario: gastosOleoDiario.toFixed(2).replace('.', ','),
        oleoSemanal: gastosOleoSemanal.toFixed(2).replace('.', ','),
        oleoMensal: gastosOleoMensal.toFixed(2).replace('.', ','),
        oleoAnual: gastosOleoAnual.toFixed(2).replace('.', ','),
    };
}

function calcularGastos2() {
    const quilometragemDiaria = parseFloat(document.getElementById('quilometragem').value);
    const oleo = parseFloat(document.getElementById('oleo').value);
    const pneus = parseFloat(document.getElementById('pneus').value);
    const combu = parseFloat(document.getElementById('combu').value);
    const relacao = parseFloat(document.getElementById('rela').value);
    const precoCombustivel = parseFloat(document.getElementById('combu').value); // Preço do combustível inserido pelo usuário

    if (!modeloSelecionado || isNaN(quilometragemDiaria) || quilometragemDiaria <= 0) {
        alert('Por favor, selecione um modelo e insira uma quilometragem diária válida.');
        return;
    } else if (isNaN(oleo) || oleo <= 0) {
        alert('Por favor, insira um valor para o valor do óleo.');
        return;
    } else if (isNaN(pneus) || pneus <= 0) {
        alert('Por favor, insira um valor para pneus.');
        return;
    } else if (isNaN(combu) || combu <= 0) {
        alert('Por favor, insira um valor para combustível atual.');
        return;
    } else if (isNaN(relacao) || relacao <= 0) {
        alert('Por favor, insira um valor para relação.');
        return;
    } else if (isNaN(precoCombustivel) || precoCombustivel <= 0) {
        alert('Por favor, insira um valor válido para o preço do combustível.');
        return;
    }

    const consumo = consumos[modeloSelecionado]; // Usando o consumo do modelo selecionado

    // Cálculos baseados na quilometragem mensal
    const quilometragemMensal = quilometragemDiaria * 30; // Aproximando 30 dias no mês

    // Cálculo de gastos com relação
    const gastosRelacaoMensal = (relacao / durabilidadeKm) * quilometragemMensal; // Custo mensal baseado na durabilidade
    const gastosRelacaoAnual = gastosRelacaoMensal * 12;
    const gastosRelacaoDiario = gastosRelacaoMensal / 30; // Custo diário
    const gastosRelacaoSemanal = gastosRelacaoDiario * 7; // Custo semanal

    // Cálculo de gastos com pneus
    const gastosPneuMensal = (pneus / durabilidadeKm) * quilometragemMensal; // Custo mensal baseado na durabilidade
    const gastosPneuAnual = gastosPneuMensal * 12;
    const gastosPneuDiario = gastosPneuMensal / 30; // Custo diário
    const gastosPneuSemanal = gastosPneuDiario * 7; // Custo semanal

    // Cálculo de gastos com combustível
    const litrosDiarios = quilometragemDiaria / consumo;
    const gastosCombustivelDiario = litrosDiarios * precoCombustivel;
    const gastosCombustivelSemanal = gastosCombustivelDiario * 7;
    const gastosCombustivelMensal = gastosCombustivelDiario * 30; // Aproximadamente 30 dias
    const gastosCombustivelAnual = gastosCombustivelMensal * 12;

    // Cálculo de gastos com óleo
    const gastosOleoMensal = (quilometragemMensal / durabilidadeOleoKm) * oleo; // Custo mensal baseado na troca a cada 1000 km
    const gastosOleoAnual = gastosOleoMensal * 12;
    const gastosOleoDiario = gastosOleoMensal / 30; // Custo diário
    const gastosOleoSemanal = gastosOleoDiario * 7; // Custo semanal

    // Atualizando a interface com os resultados
    return {
        relacaoDiario: gastosRelacaoDiario.toFixed(2).replace('.', ','),
        relacaoSemanal: gastosRelacaoSemanal.toFixed(2).replace('.', ','),
        relacaoMensal: gastosRelacaoMensal.toFixed(2).replace('.', ','),
        relacaoAnual: gastosRelacaoAnual.toFixed(2).replace('.', ','),
        pneuDiario: gastosPneuDiario.toFixed(2).replace('.', ','),
        pneuSemanal: gastosPneuSemanal.toFixed(2).replace('.', ','),
        pneuMensal: gastosPneuMensal.toFixed(2).replace('.', ','),
        pneuAnual: gastosPneuAnual.toFixed(2).replace('.', ','),
        combustivelDiario: gastosCombustivelDiario.toFixed(2).replace('.', ','),
        combustivelSemanal: gastosCombustivelSemanal.toFixed(2).replace('.', ','),
        combustivelMensal: gastosCombustivelMensal.toFixed(2).replace('.', ','),
        combustivelAnual: gastosCombustivelAnual.toFixed(2).replace('.', ','),
        oleoDiario: gastosOleoDiario.toFixed(2).replace('.', ','),
        oleoSemanal: gastosOleoSemanal.toFixed(2).replace('.', ','),
        oleoMensal: gastosOleoMensal.toFixed(2).replace('.', ','),
        oleoAnual: gastosOleoAnual.toFixed(2).replace('.', ','),
    };
}

function mostrarResultado(tipo, periodo) {
    const resultados = calcularGastos2();
    const resultadoSelecionado = document.getElementById(`resultado-${tipo}-${periodo}`);
    
    // Verifica se o resultado já está visível
    if (resultadoSelecionado.style.display === 'block') {
        // Se já estiver visível, esconda
        resultadoSelecionado.style.display = 'none';
    } else {
        // Se não estiver visível, mostre e adicione "Reais"
        resultadoSelecionado.textContent = resultados[`${tipo}${periodo.charAt(0).toUpperCase() + periodo.slice(1)}`] + ' Reais';
        resultadoSelecionado.style.display = 'block';
    }
}

// Função para calcular gastos ao clicar no botão
document.getElementById('calcular-gastos').addEventListener('click', calcularGastos);

function selecionarModelo(modelo) {
    // Remove a classe de modelo selecionado de todos os modelos
    const modelos = document.querySelectorAll('.box-modelo div');
    modelos.forEach(m => m.classList.remove('modelo-selecionada'));

    // Adiciona a classe de modelo selecionado ao modelo clicado
    const modeloDiv = document.querySelector(`div.${modelo}`);
    modeloDiv.classList.add('modelo-selecionada');

    modeloSelecionado = modelo;

    const quilometragemDiaria = parseFloat(document.getElementById('quilometragem').value);

    if (quilometragemDiaria, pneus, combu, relacao > 0) {
        alert('Calculando...');
    }
}

// Funções específicas para selecionar cada modelo
function selecionarModelo1() {
    selecionarModelo('Cg-160');
}

function selecionarModelo2() {
    selecionarModelo('Factor-150');
}

function selecionarModelo3() {
    selecionarModelo('CB-Twister-250');
}
