// Variáveis globais
let modeloSelecionado = null;
let gastosPorPeriodo = {};

// Consumo de combustível por modelo (km/litro)
const consumoCombustivel = {
    'CG 160': 40,
    'Factor 150': 35,
    'CB Twister 250': 28
};

// Funções de Seleção de Modelo
function selecionarModelo(modelo) {
    modeloSelecionado = modelo;
    // Adicionar lógica visual para destacar modelo selecionado
    const modelosDiv = document.querySelectorAll('.box-modelo div');
    modelosDiv.forEach(div => div.classList.remove('selecionado'));
    event.currentTarget.classList.add('selecionado');
}

function selecionarModelo1() {
    selecionarModelo('CG 160');
}

function selecionarModelo2() {
    selecionarModelo('Factor 150');
}

function selecionarModelo3() {
    selecionarModelo('CB Twister 250');
}

// Função para validar inputs
function validarInputs() {
    const inputs = [
        'quilometragem', 'oleokm', 'oleo', 
        'pneus', 'combu', 'rela'
    ];

    for (let inputId of inputs) {
        const input = document.getElementById(inputId);
        const valor = parseFloat(input.value);

        if (isNaN(valor) || valor <= 0) {
            alert(`Por favor, insira um valor válido para ${input.previousElementSibling.textContent}`);
            input.focus();
            return false;
        }
    }

    if (!modeloSelecionado) {
        alert('Selecione um modelo de motocicleta');
        return false;
    }

    return true;
}

// Função principal de cálculo de gastos
function calcularGastos() {
    if (!validarInputs()) return null;

    const quilometragemDiaria = parseFloat(document.getElementById('quilometragem').value);
    const kmTrocaOleo = parseFloat(document.getElementById('oleokm').value);
    const valorOleo = parseFloat(document.getElementById('oleo').value);
    const valorPneus = parseFloat(document.getElementById('pneus').value);
    const valorCombustivel = parseFloat(document.getElementById('combu').value);
    const valorRelacao = parseFloat(document.getElementById('rela').value);

    // Cálculo de consumo de combustível baseado no modelo
    const consumoKmPorLitro = consumoCombustivel[modeloSelecionado];
    const litrosConsumidosDiario = quilometragemDiaria / consumoKmPorLitro;
    const gastoDiarioCombustivel = litrosConsumidosDiario * valorCombustivel;

    // Cálculos de gastos diários
    const gastoDiarioOleo = (valorOleo / kmTrocaOleo) * quilometragemDiaria;
    const gastoDiarioPneus = (valorPneus / 10000) * quilometragemDiaria;
    const gastoDiarioRelacao = (valorRelacao / 10000) * quilometragemDiaria;

    // Cálculos para diferentes períodos
    gastosPorPeriodo = {
        'relacao-diario': gastoDiarioRelacao.toFixed(2),
        'relacao-semanal': (gastoDiarioRelacao * 7).toFixed(2),
        'relacao-mensal': (gastoDiarioRelacao * 30).toFixed(2),
        'relacao-anual': (gastoDiarioRelacao * 365).toFixed(2),

        'pneu-diario': gastoDiarioPneus.toFixed(2),
        'pneu-semanal': (gastoDiarioPneus * 7).toFixed(2),
        'pneu-mensal': (gastoDiarioPneus * 30).toFixed(2),
        'pneu-anual': (gastoDiarioPneus * 365).toFixed(2),

        'combustivel-diario': gastoDiarioCombustivel.toFixed(2),
        'combustivel-semanal': (gastoDiarioCombustivel * 7).toFixed(2),
        'combustivel-mensal': (gastoDiarioCombustivel * 30).toFixed(2),
        'combustivel-anual': (gastoDiarioCombustivel * 365).toFixed(2),

        'oleo-diario': gastoDiarioOleo.toFixed(2),
        'oleo-semanal': (gastoDiarioOleo * 7).toFixed(2),
        'oleo-mensal': (gastoDiarioOleo * 30).toFixed(2),
        'oleo-anual': (gastoDiarioOleo * 365).toFixed(2)
    };

    return gastosPorPeriodo;
}

// Função para mostrar resultados
function mostrarResultados() {
    if (!gastosPorPeriodo) {
        alert('Calcule os gastos primeiro');
        return;
    }

    const periodoSelecionado = document.getElementById('selecionar-gasto').value;
    const resultadosItens = document.querySelectorAll('.resultado-item');

    resultadosItens.forEach(item => {
        const periodo = item.id.split('-').pop();
        if (periodo === periodoSelecionado) {
            const tipoGasto = item.id.split('-')[1];
            item.textContent = `${item.textContent.split(':')[0]}: R$ ${gastosPorPeriodo[`${tipoGasto}-${periodoSelecionado}`]}`;
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Função combinada para calcular e mostrar gastos
function calcularEMostrarGastos() {
    calcularGastos();
    mostrarResultados();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('calcular-gastos').addEventListener('click', calcularEMostrarGastos);
    document.getElementById('selecionar-gasto').addEventListener('change', mostrarResultados);
});