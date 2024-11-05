// Definindo os custos dos kits de relação e pneus para cada modelo
const custos = {
    "Cg-160": {
        relacao: 260, // Custo total do kit relação
        pneu: 540, // Custo total dos pneus
        consumo: 40, // Consumo em km/l
    },
    "Factor-150": {
        relacao: 200,
        pneu: 540,
        consumo: 35,
    },
    "CB-Twister-250": {
        relacao: 400,
        pneu: 800,
        consumo: 28,
    },
};

// Preço do combustível por litro
const precoCombustivel = 6.49; // Exemplo: R$ 6,49 por litro

// Distância de durabilidade dos pneus e kit de relação
const durabilidadeKm = 25000; // 25.000 km

let modeloSelecionado = ""; // Variável global para armazenar o modelo selecionado

// Função para calcular gastos
function calcularGastos() {
    const quilometragemDiaria = parseFloat(document.getElementById('quilometragem').value);

    if (!modeloSelecionado || isNaN(quilometragemDiaria) || quilometragemDiaria <= 0) {
        alert('Por favor, selecione um modelo e insira uma quilometragem diária válida.');
        return;
    }else{
        alert('Calculo realizado com Sucesso!')
    }

    var {relacao , pneu, consumo} = custos[modeloSelecionado];
    
    // Cálculos baseados na quilometragem mensal
    const quilometragemMensal = quilometragemDiaria * 30; // Aproximando 30 dias no mês

    // Cálculo de gastos com relação
    const gastosRelacaoMensal = (relacao / durabilidadeKm) * quilometragemMensal; // Custo mensal baseado na durabilidade
    const gastosRelacaoAnual = gastosRelacaoMensal * 12;

    // Cálculo de gastos com pneus
    const gastosPneuMensal = (pneu / durabilidadeKm) * quilometragemMensal; // Custo mensal baseado na durabilidade
    const gastosPneuAnual = gastosPneuMensal * 12;

    // Cálculo de gastos com combustível
    const litrosDiarios = quilometragemDiaria / consumo;
    const gastosCombustivelDiario = litrosDiarios * precoCombustivel;
    const gastosCombustivelSemanal = gastosCombustivelDiario * 7;
    const gastosCombustivelMensal = gastosCombustivelDiario * 30; // Aproximadamente 30 dias
    const gastosCombustivelAnual = gastosCombustivelMensal * 12;

    // Atualizando a interface com os resultados
    document.getElementById('resultado-relacao-mensal').textContent = `Gastos com kit relação por mês: R$ ${gastosRelacaoMensal.toFixed(2)}`;
    document.getElementById('resultado-relacao-anual').textContent = `Gastos com kit relação por ano: R$ ${gastosRelacaoAnual.toFixed(2)}`;
    document.getElementById('resultado-pneu-mensal').textContent = `Gastos com pneus por mês: R$ ${gastosPneuMensal.toFixed(2)}`;
    document.getElementById('resultado-pneu-anual').textContent = `Gastos com pneus por ano: R$ ${gastosPneuAnual.toFixed(2)}`;
    document.getElementById('resultado-combustivel-diario').textContent = `Gastos com combustível por dia: R$ ${gastosCombustivelDiario.toFixed(2)}`;
    document.getElementById('resultado-combustivel-semana').textContent = `Gastos com combustível por semana: R$ ${gastosCombustivelSemanal.toFixed(2)}`;
    document.getElementById('resultado-combustivel-mensal').textContent = `Gastos com combustível por mês : R$ ${gastosCombustivelMensal.toFixed(2)}`;
    document.getElementById('resultado-combustivel-anual').textContent = `Gastos com combustível por ano: R$ ${gastosCombustivelAnual.toFixed(2)}`;
}

function selecionarModelo(modelo) {
    // Remove a classe de modelo selecionado de todos os modelos
    const modelos = document.querySelectorAll('.box-modelo div');
    modelos.forEach(m => m.classList.remove('modelo-selecionada'));

    // Adiciona a classe de modelo selecionado ao modelo clicado
    const modeloDiv = document.querySelector(`div.${modelo}`);
    modeloDiv.classList.add('modelo-selecionada');

    modeloSelecionado = modelo;
    alert(`Modelo selecionado: ${modelo}`);

    const quilometragemDiaria = parseFloat(document.getElementById('quilometragem').value);
    
    if (quilometragemDiaria > 0) {
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

     


      
