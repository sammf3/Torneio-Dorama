const prompt = require('prompt-sync')()

let dorama = []
menuDorama()

function menuDorama(){
    console.log(`
     ________________________________
    | ___🌸 Menu Dorama      🌸 ____|
    |🌸 1.Adicionar um novo dorama  |
    |🌸 2. Listar seus doramas      |
    |🌸 3. Atualizar                |
    |🌸 4. Cancelar o dorama        |
    |🌸 5. SAIR 😭__________________

    `)

    let opção = prompt('Escolha uma opção: ')
    switch(opção){
        case '1':
            adicionarDorama()//
            break
        case '2':
            listarDorama()
            menuDorama()
            break
        case '3':
            atualizar()
            break
        case '4':
            cancelarDorama()
            break
        case '5':
            break
        default:
            console.log('Essa opção não existe, tente novamente!')
            menuDorama()//
            break
    }
}

function adicionarDorama(){
    let nome = prompt(' Digite o nome do seu dorama: ')
    let  data = prompt(' Digite o dia que vai ver o dorama(DD/MM/YYYY): ')
    let  horario = prompt(' Digite o horário do dorama (00:00): ')
    let  genero  = prompt('Digite o genero do dorama : ')
        dorama.push({nome: nome, data: data, horario: horario, genero:genero})
            console.log(`

     O seu dorama foi marcado com sucesso!! 🫰 
     Já pode curtir com seu novo dorama   🌸🌸`)
            menuDorama()
}

function listarDorama(){
    if(dorama.length == 0){
     console.log('Nenhuma dorama foi marcado')
    }else{
    console.log('Lista de Dorama: ')
        dorama.forEach((dorama, index) => {
            console.log(`${index + 1}. 
    🇰🇷  Dorama: ${dorama.nome}  
    Dia do Dorama: ${dorama.data}
    Horário: ${dorama.horario}
    🫰 Genero ${dorama.genero}`)
        })
    }
}

function atualizar() {
    listarDorama()
    let numero = parseInt(prompt(`
    Digite número do dorama que queira atualizar:`))
        if (numero > 0 && numero <= dorama.length) {
            let dorama = prompt(' Digite o novo nome do dorama: ')
            let data = prompt(' Digite a nova data para ver o dorama(DD/MM/YYYY): ')
            let horario = prompt(' Digite o novo horário para dorama (00:00): ')
            let genero = prompt(' Digite o novo dorama: ')
        dorama[numero - 1] = {
            dorama,
            data,
            horario,
            genero}
            console.log(` Seu dorama foi atualizado com sucesso!! `)
            menuDorama()
        } else{
            console.log("Por favor, tente novamente 😭")
            menuDorama()
        }
}

function cancelarDorama(){
    listarDorama()
    let numero = prompt('Digite o número do dorama que deseja cancelar: ')
    if(numero > 0 && numero <= dorama.length){
         dorama.splice(numero - 1,1)
         console.log('Seu dorama foi cancelado com sucesso!!')
    } else {
        console.log('Número inválido, tente novamente!')
    }
    menuDorama()
}