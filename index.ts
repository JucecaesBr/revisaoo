import { veiculo } from "./class/veiculo";
import { pessoa } from "./class/Pessoa";

const julio = new pessoa("julio", 21, "Homem", "Rua Costa Filho");

let Fusca = new veiculo("Volkswagen","fusca",1993,6.565)

console.log(Fusca.getAno())

Fusca.setPreco(5.000)
console.log(Fusca.getPreco)