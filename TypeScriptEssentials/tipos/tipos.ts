// string
let nome: string = "João";
console.log(nome);
//nome = 28

// numbers
let idade: number = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);

// bolean
let possuiHobbies: boolean = false;
//possuiHobbies = 1
console.log(possuiHobbies);

// tipo explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
//minhaIdade = '27'

// array
let hobies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobies[0]);
console.log(typeof hobies);

console.log(hobies);
hobies = [100, 200, 300];
//hobies = 100
console.log(hobies);

// tuplas
let endereco: [string, number, string] = ["Av principal", 99, ""];
console.log(endereco);

endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);

// enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul = 10,
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
console.log(Cor[Cor.Azul]);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
