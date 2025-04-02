function calcularTotal() {
    try {
        const precos = {
            cachorroQuente: 7.00,
            bauruSimples: 10.30,
            bauruComOvo: 15.00,
            hamburguer: 7.00,
            cheeseburger: 9.00,
            BatataFrita: 35.00,
            JarraDeSuco: 16.00,
            refrigerante: 7.00
        };

        let total = 0;
        let itensPedidos = [];

        function adicionarItem(idQtde, preco, nomeItem) {
            const elementoQtde = document.getElementById(idQtde);
            if (!elementoQtde) {
                console.error(`Elemento com ID ${idQtde} não encontrado.`);
                return;
            }

            let quantidade = parseInt(elementoQtde.value);
            if (isNaN(quantidade) || quantidade < 0) {
                console.error(`Quantidade inválida para ${nomeItem}.`);
                return;
            }

            if (quantidade > 0) {
                total += quantidade * preco;
                itensPedidos.push(
                    `<li>${nomeItem}: ${quantidade} x R$${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} = R$${(quantidade * preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</li>`
                );
            }
        }

        adicionarItem("cachorroQuenteQtde", precos.cachorroQuente, "Cachorro Quente");
        adicionarItem("bauruSimplesQtde", precos.bauruSimples, "Bauru Simples");
        adicionarItem("bauruComOvoQtde", precos.bauruComOvo, "Bauru c/ Ovo");
        adicionarItem("hamburguerQtde", precos.hamburguer, "Hamburguer");
        adicionarItem("cheeseburgerQtde", precos.cheeseburger, "Cheeseburger");
        adicionarItem("batatafritaQtde", precos.BatataFrita, "Batata Frita");
        adicionarItem("jarradesucoQtde", precos.JarraDeSuco, "Jarra de Suco");
        adicionarItem("refrigeranteQtde", precos.refrigerante, "Refrigerante");

        let resumo = "";
        if (itensPedidos.length > 0) {
            resumo = `
                <h3>Itens Pedidos:</h3>
                <ul>${itensPedidos.join("")}</ul>
                <p><b>Total: R$${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</b></p>
            `;
        } else {
            resumo = "<p>Nenhum item selecionado.</p>";
        }

        document.getElementById("resumoPedido").innerHTML = resumo;
    } catch (error) {
        console.error("Ocorreu um erro durante o cálculo do pedido:", error);
        document.getElementById("resumoPedido").innerHTML = "<p>Ocorreu um erro. Tente novamente.</p>";
    }
}