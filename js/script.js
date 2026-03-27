const produtos = [
  {
    productName: "Poedagar Nautilus",
    productPrice: 160,
    productQtd: 4,
    productDesc: function () {
      return `${this.productName} é um relógio a prova D'Água, estiloso e de ótimo custo benficio ! Custando apenas R$${this.productPrice}, apenas ${this.productQtd} em estoque`;
    },
  },
  {
    productName: "Corrente Grumet",
    productPrice: 130,
    productQtd: 3,
    productDesc: function () {
      return `${this.productName} de prata 925 estilo e qualidade para você ! Custando apenas R$${this.productPrice}, apenas ${this.productQtd} em estoque`;
    },
  },
  {
    productName: "Corrente Cordão Baiano",
    productPrice: 180,
    productQtd: 5,
    productDesc: function () {
      return `${this.productName} de prata 925 estilo e qualidade para você ! Custando apenas R$${this.productPrice}, apenas ${this.productQtd} em estoque`;
    },
  },
];

const nomesProdutos = Array.from(document.querySelectorAll(".nomeProduto"));
const detalhesProdutos = Array.from(document.querySelectorAll(".detalhes"));
produtos.forEach((produto, indice) => {
  //Pegar a propriedade productName e productDesc de cada objeto da array produtos
  nomesProdutos[indice].innerText = produto.productName;
  //Add os nomes do produtos dentro das tags h1 passando o index para acessar cada h1 individualmente
  detalhesProdutos[indice].innerText = produto.productDesc();
  //Add a descrição do produtos dentro das tags p passando o index para acessar cada p individualmente
});

const btnDetalhes = Array.from(document.querySelectorAll(".btn-detalhes"));
btnDetalhes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.nextElementSibling.classList.toggle("ativo");
  });
});
