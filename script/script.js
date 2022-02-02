const input = document.getElementById("addEmployee");
let listNames = [
  "Elisabete Freitas-Dantas",
  "Peter Parker",
  "Peralta Parker",
  "Adam Benson",
  "Davis Clarkson",
  "David Clarkson",
  "Davis Clarksonss",
  "Pedro Parker",
  "Donald Clarkson",
  "Amanda Mendes Costa",
  "Daniel de Souza Santos",
  "Alice de Souza Araujo-Oliveira",
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
  document.getElementById("list-of-emails").innerHTML = getEmails()
    .map((cadastro) =>`<tr>
                          <td>${cadastro.name}</td>
                          <td>${cadastro.email}@company.com</td>
                        </tr>`
    ).join("");

};

const fixEmails = (arr) => {
  var outputList = [];
  let countEmails = 1;
  let preview = {};


  arr = arr.sort((a, b) => {
    if (a.email < b.email) {
      return -1;
    }
    if (a.email > b.email) {
      return 1;
    }
    return 0;
  });

  for  (let index = 0; index < arr.length; index++) {
    if (
      outputList.map((elem) => elem.email).indexOf(arr[index].email) === -1 &&
      arr[index].email !== ""
    ) {
      outputList.push({ name: arr[index].name, email: arr[index].email });
    } else {
      outputList.push({ name: arr[index].name, email: arr[index].email + countEmails });
    }
    if (index === 0) {
      preview = arr[index];
    }
    if (index > 0 && arr[index - 1].email !== arr[index].email) {
      preview = arr[index];
      countEmails = 0;
    }
    countEmails++;
  }

  return outputList;
};

const getEmail = (name) => {
  let splitName = name.split("-").join("").split(" ");
  let msg = "";

  let newName = splitName[splitName.length - 1];
  for (let index = 0; index < splitName.length - 1; index++) {
    newName += `.${splitName[index][0][0]}`;
  }
  msg = `${newName}`.toLocaleLowerCase();

  return msg;
};

const getEmails = () => {
  return fixEmails(listNames.map((name) => ({ name, email: getEmail(name) })));
};

loadTable();