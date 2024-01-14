let nomeDoHeroi = "Frederico"
let expAcumulada = 9849
let nivelDoHeroi = ""

if(expAcumulada < 1000) {
    nivelDoHeroi = "Ferro"
} else if(expAcumulada > 1000 && expAcumulada <= 2000) {
    nivelDoHeroi = "Bronze"
} else if(expAcumulada > 2000 && expAcumulada <= 5000) {
    nivelDoHeroi = "Prata"
} else if(expAcumulada > 5000 && expAcumulada <= 7000) {
    nivelDoHeroi = "Ouro"
} else if(expAcumulada > 7000 && expAcumulada <= 8000) {
    nivelDoHeroi = "Platina"
} else if(expAcumulada > 8000 && expAcumulada <= 9000) {
    nivelDoHeroi = "Ascendente"
} else if(expAcumulada > 9000 && expAcumulada <= 10000) {
    nivelDoHeroi = "Imortal"
} else {
    nivelDoHeroi = "Radiante"
}

console.log("O herói de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi)