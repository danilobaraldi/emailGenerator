const input = document.getElementById("addEmployee");
const table = document.getElementsByClassName("table-list")


const listNames = [
    'Elisabete Freitas-Dantas',
    'Peter Parker',
    'Adam Benson',
    'Clare Donaldson',
    'Ben Adams',
    'Donald Clarkson',
    'Amanda Mendes Costa',
    'Daniel de Souza Santos',
    'Alise de Souza Araujo-Oliveira',
    'Marcos Antonio Paiva Filho'
];

function addName() {
    let validName = listNames.includes(input.value);

    if (input.value == '' || input.value == ' ') {
        return alert("Insira o nome do funcionário!")
    }
    if (validName == false) {
        input.value
        return listNames.push(input.value);
    } else {
        return alert("Funcionário já cadastrado!!!")
    }
}

let nameNoHifen = []

const removeHifen = (nome) => {
    nameNoHifen = nome.split('-').join('').toLowerCase();
    nameNoHifen = nameNoHifen.split(' ')
    console.log(nameNoHifen)
    return nameNoHifen;
}

listNames.forEach((name, idex, array) => {
    removeHifen(name);
})

console.log(nameNoHifen[nameNoHifen.length -1] +'.'+ nameNoHifen[0][1]+'@company.com')

nameNoHifen.forEach((index) => {

    let msg = `${nameNoHifen[nameNoHifen.length -1]}.${nameNoHifen[0][1]}@company.com`;
    console.log(msg)
})