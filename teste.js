let vitorias = 150
let derrotas = 33
let total = vitorias - derrotas
let rank

rankeada()

function rankeada(total){
    if (total <= 10)
        nivel = "bronze";

        else if (total >= 11 && total <= 20){
                rank = "prata";
        }
        else if (total >= 21 && total <= 50){
                rank = "ouro";
        }
        else if (total >= 51 && total <= 80){
                rank = "diamante";
        }
        else if (total >= 81 && total <= 90){
            rank = "lendario";
        }
    else {
        rank = "radiante";
    }  
}




console.log("O Herói tem de saldo de " + total + " vitorias" + " e está no rank de " + rank)