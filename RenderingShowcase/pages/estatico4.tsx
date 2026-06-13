export function getStaticProps() {
  console.log("[Server] gerando props para o componenete...");
  const produtos = [
    { id: 1, nome: "Caneta", preco: 5.6 },
    { id: 2, nome: "Caderno", preco: 15.6 },
    { id: 3, nome: "Borracha", preco: 7.6 },
    { id: 4, nome: "Tesoura", preco: 21.55 },
  ];

  return {
    props: {
      produtos,
    },
  };
}

export default function Estatico4(props) {
  function renderizarProdutos() {
    console.log("[Cliente] rederizando o componente...");

    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.id} - {produto.nome} tem preço de R${produto.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Estático #04</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}
