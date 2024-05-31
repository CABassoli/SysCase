// Estrutura de dados para armazenar as receitas padronizadas
const recipes = {
    "banana_aveia": {
        "ingredients": {
            "farinha_aveia": 200,
            "banana": 100,
            "ovo": 1,
            "farelo_aveia": 20,
            "oleo_coco": 15
        }
    },
    "maca_canela": {
        "ingredients": {
            "farinha_aveia": 200,
            "maca": 100,
            "ovo": 1,
            "farelo_aveia": 20,
            "oleo_coco": 15,
            "canela": 3
        }
    }
};

// Estrutura de dados para armazenar o estoque de matéria-prima
let stock = {};

// Função para adicionar matéria-prima ao estoque
function addToStock(material, price, date, quantity, unit) {
    // Implementação para adicionar matéria-prima ao estoque
}

// Função para calcular a matéria-prima consumida para cada fornada de biscoitos
function calculateConsumption(recipe, halfBatch = false) {
    // Implementação para calcular a matéria-prima consumida
}

// Função para verificar a necessidade de reabastecimento de estoque
function checkRestock(material) {
    // Implementação para verificar a necessidade de reabastecimento de estoque
}

// Função para calcular o custo de cada pacote de biscoito com base em seu peso
function calculateCost(weight, recipe) {
    // Implementação para calcular o custo de cada pacote de biscoito
}

// Função para calcular o valor de venda com base na margem de lucro
function calculateSellingPrice(cost, profitMargin) {
    // Implementação para calcular o valor de venda com base na margem de lucro
}
