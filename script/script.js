const input = document.getElementById("addEmployee");
let listNames = [
  "Elisabete Freitas-Dantas",
  "Peter Parker",
  "Adam Benson",
  "Davis Clarkson",
  "Pedro Parker",
  "Donald Clarkson",
  "Amanda Mendes Costa",
  "Daniel de Souza Santos",
  "Alise de Souza Araujo-Oliveira",
  "Marcos Antonio Paiva Filho",
];

function addName() {
  if (input.value == "" || input.value == " " || input.value.length < 8) {
    return alert("Insira o nome COMPLETO do funcionário!");
  }

  let validName = listNames.includes(input.value);
  if (validName === false) {
    listNames.push(input.value);
    loadTable();
  } else {
    alert("Funcionário já cadastrado!!!");
  }
}

const loadTable = () => {
  document.getElementById("list-of-emails").innerHTML = listNames.map((name) => 
  `<tr>
    <td>${name}</td>
    <td>${getEmail(name)}</td>
   </tr>`).join("");
};

const getEmail = (name) => {
    let splitName = name.split("-").join("").split(" ");
  
    let newName = splitName[splitName.length - 1];
    for (let index = 0; index < splitName.length - 1; index++) {
      newName += `.${splitName[index][0][0]}`;
    }
  
    return `${newName}@company.com`.toLocaleLowerCase();
  };

 
loadTable();

//TODO: Manipular os e-mails e adicionar um contador caso já exista.