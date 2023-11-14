// function login() {
//     localStorage.setItem('isAuth', true);
//     let newLogin = JSON.parse.localStorage.getItem('login');

//     if (){

//     }
// }

var arrayLogin = []
function register() {
    const inputRegister = document.getElementById('input-register').value;
    const inputPass = document.getElementById('input-pass').value;
    
    arrayLogin.push = {
        login: inputRegister,
        password: inputPass
    }

    let newLogin =  JSON.stringify(arrayLogin);

    console.log(arrayLogin)
    localStorage.setItem('login', newLogin);

    alert(`Cadastro concluído com sucesso! Login: ${inputRegister} Senha: ${inputPass}`)


}