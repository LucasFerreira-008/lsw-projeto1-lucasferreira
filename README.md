Minha Loja - Universo Nerd;
Aluno: Lucas de Lima Ferreira - 202612010021;
Como executar: `node projeto1.js`;

FUNCIONALIDADES
- `listarProdutos(lista)`: exibe cada produto em uma linha numerada, com nome, categoria, preço, quantidade em estoque e vendidos.
- `cadastrarProduto(lista, nome, categoria, preco, quantidade)`: cria um produto novo (com `vendidos` igual a 0), adiciona ao final da lista e retorna o novo total de produtos. O nome é salvo já formatado.
- `calcularValorEstoque(lista)`: retorna a soma de preço * quantidade de todos os produtos.
- `buscarProduto(lista, termo)`: retorna o primeiro produto cujo nome contém o termo (sem diferenciar maiúsculas de minúsculas) ou `null` se não achar.
- `produtosEmFalta(lista, minimo)`: retorna um novo array com os produtos de quantidade menor que o mínimo, sem alterar o original.
- `aplicarDesconto(lista, categoria, percentual)`: aplica o desconto no preço de todos os produtos da categoria e retorna quantos foram alterados.
- `registrarVenda(lista, nome, quantidade)`: usa `buscarProduto` para encontrar o produto; se existir e houver estoque, diminui a quantidade, aumenta os vendidos e retorna `true`; senão retorna `false`.
- `formatarNome(texto)`: remove espaços das pontas, deixa a primeira letra maiúscula e o resto minúsculo.
- `converterParaJSON(lista)`: converte o array de produtos em texto JSON.
- `lerJSON(texto)`: converte o texto JSON de volta em array.
- `gerarRelatorio(nome, lista)`: exibe o relatório da loja (nome em maiúsculas, total de produtos, valor do estoque e produtos com estoque baixo), reutilizando `calcularValorEstoque` e `produtosEmFalta`.
