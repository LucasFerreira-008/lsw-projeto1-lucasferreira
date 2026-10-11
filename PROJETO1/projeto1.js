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
        nome: formatarNome(nome),
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

function produtosEmFalta(lista, minimo) {
    const emFalta = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].quantidade < minimo) {
            emFalta.push(lista[i]);
        }
    }
    return emFalta;
}

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

function formatarNome(texto) {
    const limpo = texto.trim();
    return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}

function converterParaJSON(lista) {
    return JSON.stringify(lista);
}

function lerJSON(texto) {
    return JSON.parse(texto);
}

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

gerarRelatorio(nomeLoja, produtos);