const input = document.getElementById("addEmployee");
let listNames = [
    'Elisabete Freitas-Dantas',
    'Peter Parker',
    'Adam Benson',
    'Davis Clarkson',
    'Pedro Parker',
    'Donald Clarkson',
    'Amanda Mendes Costa',
    'Daniel de Souza Santos',
    'Alise de Souza Araujo-Oliveira',
    'Marcos Antonio Paiva Filho'
];

function addName() {
    
    if (input.value == '' || input.value == ' ' || input.value.length < 8) {
        return alert("Insira o nome COMPLETO do funcionário!")   
    }

    let validName = listNames.includes(input.value);
    if (validName == false) {
        
        setTimeout(() => {
            input.value
        }, 10);
        return listNames.push(input.value);
    } else {
        return alert("Funcionário já cadastrado!!!")
    }
}


const removeHifen = listNames.map((name) => {
    return name.split('-').join('').toLocaleLowerCase();
})

const returnSubList = removeHifen.map((value)=>{
    return value.split(' ')
})
console.log(returnSubList)

const returnMail = returnSubList.map((value,index)=>{
    return `${value[value.length -1]}.${value[0][0]}@company.com`;
    
})
console.log(returnMail)

//TODO: Adicionar algum tipo de setTimeOut - para fazer o reload do código após a inclusão do nove nome. 
//TODO: Criar uma regra para validação do nome com base na quantidade dos arrays para gerar o e-mail. 
//TODO: Exportar os e-mails para uma lista permanente 
//TODO: Manipular os e-mails e adicionar um contador caso já exista.