const prompt = require('prompt-sync')()

let jogos = []
menuGames()

function menuGames(){
    console.log(`
     -----------------------------
    |   _____ Menu  games_________|
    |👾 1. Adicionar nova jogo    |
    |👾 2. Listar sessões         |
    |👾 3. Atualizar jogo         |
    |👾 4. Cancelar um jogo       |
    |👾 5. SAIR___________________

    `)

    let opção = prompt('Escolha uma opção: ')
    switch(opção){
        case '1':
            adicionarJogo()//
            break
        case '2':
            listarJogo()
            menuGames()
            break
        case '3':
            atualizarJogo()
            break
        case '4':
            cancelarJogo()
            break
        case '5':
            break
        default:
            console.log('Essa opção não existe, tente novamente!')
            menuGames()//
            break
    }
}

function adicionarJogo(){
    let jogo = prompt(' Digite o nome do seu jogo: ')
    let  ano = prompt(' Digite o ano de lançamento(DD/MM/YYYY): ')
    let  indicação = prompt(' Digite o número de indicação: ')
    let  genero  = prompt('Digite o genero do jogo : ')
        jogos.push({jogo: jogo, ano:ano , indicação: indicação, genero:genero})
            console.log(`

     O seu jogo foi marcado com sucesso!! 
         Hora de jogar!!!  `)
            menuGames()
}

function listarJogo(){
    if(jogos.length == 0){
     console.log('Nenhuma jogo foi marcado')
    }else{
    console.log('Lista de Dorama: ')
        jogos.forEach((jogos , index) => {
            console.log(`${index + 1}. 
    Games: ${jogos.jogo}  
    Ano de lançamento: ${jogos.ano}
    indicação: ${jogos.indicação}
    Genero ${jogos.genero}`)
        })
    }
}

function atualizarJogo() {
    listarJogo()
    let numero = parseInt(prompt(`
    Digite número do dorama que queira atualizar:`))
        if (numero > 0 && numero <= jogos.length) {
            let jogo = prompt(' Digite o novo nome do dorama: ')
            let ano  = prompt(' Digite a nova data para ver o dorama(DD/MM/YYYY): ')
            let indicação = prompt(' Digite o novo horário para dorama (00:00): ')
            let genero = prompt(' Digite o novo dorama: ')
            jogos[numero - 1] = {
            jogo,
            ano,
            indicação,
            genero}
            console.log(` Seu jogo foi atualizado com sucesso!! `)
            menuGames()
        } else{
            console.log("Por favor, tente novamente")
            menuGames()
        }
}

function cancelarJogo(){
    listarJogo()
    let numero = prompt('Digite o número do jogo que deseja cancelar: ')
    if(numero > 0 && numero <= jogos.length){
         jogos.splice(numero - 1,1)
         console.log('Seu jogo foi cancelado com sucesso!!')
    } else {
        console.log('Número inválido, tente novamente!')
    }
    menuGames()
}