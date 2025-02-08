let vitorias = 150
let derrotas = 33
let total = vitorias - derrotas
let nivel

rankeada()

function rankeada(total){
    if (total <= 10)
        nivel = "bronze";
    else {
        nivel = "radiante";
    } 
}




console.log("O Herói tem de saldo de " + total + " está no nível de " + nivel)