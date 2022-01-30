let listNames = ['Elisabe Freitas Dantas','Peter Parker', 'Adam Benson', 'Clare Donaldson', 'Ben Adams', 'Donald Clarkson', 'Amanda Mendes Costa', 'Daniel de Souza Santos', 'Alise de Souza Araujo-Oliveira', 'Marcos Antonio Paiva Filho']; 

function addName(){
    let input = document.getElementById("addEmploye");
    listNames.push(input.value);
    console.log(input.value);
    
}

function showList(){

    let tableList = document.getElementById("listUsers")
    for(let i = 0; i <listNames.length; i++){

        let showUser = listNames[i];
        

    }
        
    ;
}