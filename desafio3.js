class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';

        // Definir o ataque com base no tipo do herói
        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }

        
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Arthas", 30, "mago");
heroi1.atacar();  

const heroi2 = new Heroi("Lancelot", 28, "guerreiro");
heroi2.atacar(); 

const heroi3 = new Heroi("Zhuge", 35, "monge");
heroi3.atacar();  

const heroi4 = new Heroi("Shiro", 25, "ninja");
heroi4.atacar();