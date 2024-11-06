// Distância de durabilidade dos pneus e kit de relação
const durabilidadeKm = 25000; // 25.000 km

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
        alert('Calculando gastos...');
    }

    const consumo = consumos[modeloSelecionado]; // Usando o consumo do modelo selecionado

    // Cálculos baseados na quilometragem mensal
    const quilometragemMensal = quilometragemDiaria * 30; // Aproximando 30 dias no mês

    // Cálculo de gastos com relação
    const gastosRelacaoMensal = (relacao / durabilidadeKm) * quilometragemMensal; // Custo mensal baseado na durabilidade
    const gastosRelacaoAnual = gastosRelacaoMensal * 12;

    // Cálculo de gastos com pneus
    const gastosPneuMensal = (pneus / durabilidadeKm) * quilometragemMensal; // Custo mensal baseado na durabilidade
    const gastosPneuAnual = gastosPneuMensal * 12;

    // Cálculo de gastos com combustível
    const litrosDiarios = quilometragemDiaria / consumo;
    const gastosCombustivelDiario = litrosDiarios * precoCombustivel;
    const gastosCombustivelSemanal = gastosCombustivelDiario * 7;
    const gastosCombustivelMensal = gastosCombustivelDiario * 30; // Aproximadamente 30 dias
    const gastosCombustivelAnual = gastosCombustivelMensal * 12;

    // Atualizando a interface com os resultados
    document.getElementById('resultado-relacao-mensal').textContent = `Gastos com kit relação por mês: R$ ${gastosRelacaoMensal.toFixed(2).replace('.', ',')} Reais`;
    document.getElementById('resultado-relacao-anual').textContent = `Gastos com kit relação por ano: R$ ${gastosRelacaoAnual.toFixed(2).replace('.', ',')} Reais`;
    document.getElementById('resultado-pneu-mensal').textContent = `Gastos com pneus por mês: R$ ${gastosPneuMensal.toFixed(2).replace('.', ',')} Reais`;
    document.getElementById('resultado-pneu-anual').textContent = `Gastos com pneus por ano: R$ ${gastosPneuAnual.toFixed(2).replace('.', ',')} Reais`;
    document.getElementById('resultado-combustivel-diario').textContent = `Gastos com combustível por dia: R$ ${gastosCombustivelDiario.toFixed(2).replace('.', ',')} Reais`;
    document.getElementById('resultado-combustivel-semana').textContent = `Gastos com combustível por semana: R$ ${gastosCombustivelSemanal.toFixed(2).replace('.', ',')} Reais`;
    document.getElementById('resultado-combustivel-mensal').textContent = `Gastos com combustível por mês: R$ ${gastosCombustivelMensal.toFixed(2).replace('.', ',')} Reais`;
    document.getElementById('resultado-combustivel-anual').textContent = `Gastos com combustível por ano: R$ ${gastosCombustivelAnual.toFixed(2).replace('.', ',')} Reais`;
}

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
        calcularGastos();
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