// ===== 1. DADOS =====
const nomeLoja = "Universo Nerd";

const produtos = [
    {
        nome: "Camiseta Star Wars",
        categoria: "Roupas",
        preco: 49.90,
        quantidade: 100,
        vendidos: 30
    },
    {
        nome: "Caneca Marvel",
        categoria: "Acessórios",
        preco: 29.90,
        quantidade: 50,
        vendidos: 15
    },
    {
        nome: "Action Figure Homem-Aranha",
        categoria: "Colecionáveis",
        preco: 129.90,
        quantidade: 4,
        vendidos: 8
    },
    {
        nome: "Moletom Harry Potter",
        categoria: "Roupas",
        preco: 89.90,
        quantidade: 40,
        vendidos: 12
    },
    {
        nome: "Chaveiro Pikachu",
        categoria: "Acessórios",
        preco: 14.90,
        quantidade: 80,
        vendidos: 35
    },
    {
        nome: "Funko Pop Homem de Ferro",
        categoria: "Colecionáveis",
        preco: 99.90,
        quantidade: 3,
        vendidos: 10
    }
];

// ===== 2. FUNÇÕES =====

// Tarefa 2
function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(`${i + 1}. ${lista[i].nome} | ${lista[i].categoria} | R$ ${lista[i].preco} | ${lista[i].quantidade} un. | ${lista[i].vendidos} vendidos`);
    }
}

// Tarefa 3
function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
    const novoProduto = {
        nome: formatarNome(nome),
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0,
    };
    lista.push(novoProduto);
    return lista.length;
}

// Tarefa 4
function calcularValorEstoque(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].preco * lista[i].quantidade;
    }
    return total;
}

// Tarefa 5
function buscarProduto(lista, termo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome.toLowerCase().includes(termo.toLowerCase())) {
            console.log(`Encontrado: ${lista[i].nome} - R$ ${lista[i].preco}`);
            return lista[i];
        }
    }
    console.log(`Nenhum produto encontrado.`);
    return null;
}

// Tarefa 6
function produtosEmFalta(lista, minimo) {
    const emFalta = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].quantidade < minimo) {
            emFalta.push(lista[i]);
        }
    }
    return emFalta;
}

// Tarefa 7
function aplicarDesconto(lista, categoria, percentual) {
    let alterados = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].categoria === categoria) {
            lista[i].preco = lista[i].preco - (lista[i].preco * percentual / 100);
            alterados++;
        }
    }
    return alterados;
}

// Tarefa 8
function registrarVenda(lista, nome, quantidade) {
    const produto = buscarProduto(lista, nome);
    if (!produto || produto.quantidade < quantidade) {
        console.log("Venda não realizada! Produto inexistente ou estoque insuficiente.");
        return false;
    } else {
        produto.quantidade -= quantidade;
        produto.vendidos += quantidade;
        console.log(`Venda realizada! ${produto.nome}: ${produto.quantidade} un. em estoque, ${produto.vendidos} vendidos.`);
        return true;
    }
}

// Tarefa 9
function formatarNome(texto) {
    const limpo = texto.trim();
    return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}

// Tarefa 10
function converterParaJSON(lista) {
    return JSON.stringify(lista);
}

function lerJSON(texto) {
    return JSON.parse(texto);
}

// Tarefa 11
function gerarRelatorio(nome, lista) {
    const baixo = produtosEmFalta(lista, 5);
    console.log(`===== RELATÓRIO: ${nome.toUpperCase()} =====`);
    console.log(`Produtos cadastrados: ${lista.length}`);
    console.log(`Valor total em estoque: R$ ${calcularValorEstoque(lista)}`);
    console.log(`Produtos com estoque baixo: ${baixo.length}`);
    for (let i = 0; i < baixo.length; i++) {
        console.log(`- ${baixo[i].nome} (${baixo[i].quantidade} un.)`);
    }
}

// ===== 3. PROGRAMA PRINCIPAL =====
console.log("--- Tarefa 2: listar ---");
listarProdutos(produtos);

console.log("--- Tarefa 3: cadastrar ---");
const total = cadastrarProduto(produtos, "Colar ET", "Acessórios", 25, 4);

console.log("--- Tarefa 4: valor do estoque ---");
console.log(`Valor do estoque: R$${calcularValorEstoque(produtos)}`);

console.log("--- Tarefa 5: buscar ---");
console.log(buscarProduto(produtos, "PIKACHU"));
console.log(buscarProduto(produtos, "Playstation"));

console.log("--- Tarefa 6: em falta ---");
const faltando = produtosEmFalta(produtos, 35);
console.log(`Produtos com menos de 35 unidades: ${faltando.length}`);

console.log("--- Tarefa 7: desconto ---");
const alterados = aplicarDesconto(produtos, "Roupas", 10);
console.log(`${alterados} produtos receberam desconto.`);
console.log(`Novo preço da camiseta: R$ ${buscarProduto(produtos, "Camiseta").preco}`);

console.log("--- Tarefa 8: registrar venda ---");
registrarVenda(produtos, "Caneca", 3);
registrarVenda(produtos, "Caneca", 1000);
registrarVenda(produtos, "Copo", 1);

console.log("--- Tarefa 9: formatar nome ---");
console.log(formatarNome("    cAmisETA VinGAdoreS  "));

console.log("--- Tarefa 10: JSON ---");
const texto = converterParaJSON(produtos);
console.log(typeof texto);
const recuperados = lerJSON(texto);
console.log(`Itens recuperados: ${recuperados.length} | Primeiro: ${recuperados[0].nome}`);

console.log("--- Tarefa 11: relatório ---");
gerarRelatorio(nomeLoja, produtos);