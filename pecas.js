// Sistema de Cadastramento de Peças

let pesoPeca = 300 // peso deve ser maior que 100
let nomePeca = "calota" // tamanho do nome deve ser maior que 2 caracteres
let quantidadePeca = 9 // quantidade de peças deve ser no máximo 10

if (quantidadePeca < 10) {
    console.log ("Lista verificada, a peça pode ser cadastrada.")

    if (nomePeca.length > 2) {
        console.log ("Nome verificado, a peça pode ser cadastrada.")
    
        if (pesoPeca >= 100) {
            console.log ("Peso verificado, a peça foi cadastrada com sucesso.")
        
        } else {
            console.log ("Peso verificado, a peça não pode ser cadastrada por ser inferior a 100 gramas.")
        }
    
    } else {
        console.log ("Nome verificado, a peça não pode ser cadastrada por ter menos de 2 caracteres.")
}

} else {
    console.log ("Limite da Lista excedido, a peça não pode ser cadastrada.")
}