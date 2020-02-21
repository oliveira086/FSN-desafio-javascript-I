// database
let alunosDaEscola = [{
        nome: "Henrique",
        notas: [],
        cursos: [],
        faltas: 5
    },
    {
        nome: "Edson",
        notas: [],
        cursos: [],
        faltas: 2
    },
    {
        nome: "Bruno",
        notas: [10, 9.8, 9.6],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Guilherme",
        notas: [10, 9.8, 9.6],
        cursos: [{
            nomeDoCurso: "Full Stack",
            dataMatricula: `${new Date}`
        }],
        faltas: 0
    },
    {
        nome: "Carlos",
        notas: [],
        cursos: [],
        faltas: 0
    },
    {
        nome: "Lucca",
        notas: [10, 9.8, 9.6],
        cursos: [{
            nomeDoCurso: "UX",
            dataMatricula: `${new Date}`
        }],
        faltas: 0
    }
];


// function with responsability in add student in the database
const AdicionarAluno = nome => {

    let objeto = {
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    }

    alunosDaEscola.push(objeto)

    console.log(`Aluno(a) ${nome} adicionado(a) com sucesso!`)
}

// function with responsability in list all the students 
const ListarAlunos = () => {

    console.log('Listagem de alunos\n')

    for (let alunos in alunosDaEscola) {

        let nome = alunosDaEscola[alunos].nome
        let notas = alunosDaEscola[alunos].notas
        let cursos = alunosDaEscola[alunos].cursos
        let curso = () => {
            for (let i = 0; i < cursos.length; i++) {
                return (cursos[i].nomeDoCurso)
            }
        }

        let faltas = alunosDaEscola[alunos].faltas

        console.log(`Nome: ${nome}
Notas: ${notas}
Cursos: ${curso()}
Faltas: ${faltas}\n`)

    }
}

const VerificarNomeAluno = (alunosDaEscola, nome) =>{
    let alunosEncontrados = alunosDaEscola.filter(alunosDaEscola => {
        return (alunosDaEscola.nome == nome)
    })
    return (alunosEncontrados)
}

// function with responsability in find the student in the database
const BuscarAluno = nome => {

    let alunosEncontrados = VerificarNomeAluno(alunosDaEscola, nome)
    
    alunosEncontrados.length > 0 ? console.log(`Aluno(a) ${nome} encontrado(a)`) :
        console.log(`Aluno(a) ${nome} não foi encontrado ou não esta matriculado`)

}

// function with responsability in add subjects for students in the database
const MatricularAluno = (nome, curso) => {

    let objeto = {
        nomeDoCurso: `${curso}`,
        dataMatricula: `${new Date}`
    }

    let alunosEncontrados = VerificarNomeAluno(alunosDaEscola, nome)

    if (alunosEncontrados.length > 0) {
        for (let alunos in alunosDaEscola) {
            if (alunosDaEscola[alunos].nome == nome) {
                alunosDaEscola[alunos].cursos.push(objeto)
            }
        }
        ListarAlunos()

    } else {
        console.log('Aluno não encontrado, matricule-o antes')
    }

}

// function with responsability in add faults for student add in the database
const AplicarFalta = nome => {

    let alunosEncontrados = VerificarNomeAluno(alunosDaEscola, nome)

    if (alunosEncontrados.length > 0) {
        for (let alunos in alunosDaEscola) {
            if (alunosDaEscola[alunos].nome == nome) {
        
                alunosDaEscola[alunos].faltas = alunosDaEscola[alunos].faltas + 1

                console.log(`Falta cadastrada no(a) aluno(a) ${nome}`)
            }
        }
    }
    else {
        console.log('Aluno não encontrado, matricule-o antes')
    }
}

// function with responsability in add evaluation in student add in the database
const AplicarNota = (nome, nota) =>{

    let alunosEncontrados = VerificarNomeAluno(alunosDaEscola, nome)

    if (alunosEncontrados.length > 0) {
        for (let alunos in alunosDaEscola) {
            if (alunosDaEscola[alunos].nome == nome) {
        
                alunosDaEscola[alunos].notas.push(nota)

                console.log(`Nota adicionada para aluno(a) ${nome}`)
            }
        }
    }
    else {
        console.log('Aluno não encontrado, matricule-o antes')
    }

}


// function with resposability in verify if the student be approved
const AprovarAluno = nome => {

    let alunosEncontrados = VerificarNomeAluno(alunosDaEscola, nome)

    if (alunosEncontrados.length > 0) {
        for (let alunos in alunosDaEscola) {
            if (alunosDaEscola[alunos].nome == nome) {

                let faltas = alunosDaEscola[alunos].faltas
                let curso = alunosDaEscola[alunos].cursos.length
                let nota = 0
                for(let i = 0; i<alunosDaEscola[alunos].notas.length; i++){
                    let valor = alunosDaEscola[alunos].notas[i]

                    nota = nota + valor
                }

                let media = (nota/alunosDaEscola[alunos].notas.length).toFixed(2)

                if(media >= 7){
                    if(faltas <= 3){
                        if(curso >= 1){
                            console.log('Aluno aprovado')
                        }
                        else{
                            console.log('O(a) aluno(a) não está matriculado em um curso')
                        }
                    }
                    else{
                        console.log('O(a) aluno(a) não tem presença o suficiente para ser aprovado')
                    }
                }
                else{
                    console.log('O(a) aluno(a) não tem nota suficiente para ser aprovado')
                }     
            }
        }
    }
    else {
        console.log('Aluno não encontrado, matricule-o antes')
    }
}


