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

function listarProdutos(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(`${i + 1}. ${lista[i].nome} | ${lista[i].categoria} | R$ ${lista[i].preco} | ${lista[i].quantidade} un. | ${lista[i].vendidos} vendidos`);
    }
}

function cadastrarProduto(lista, nome, categoria, preco, quantidade) {
    const novoProduto = {
        nome: nome,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0,
    };
    lista.push(novoProduto);
    return lista.length;
}

function calcularValorEstoque(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i].preco * lista[i].quantidade;
    }
    return total;
}

console.log(`Valor do estoque: R$${calcularValorEstoque(produtos)}`);