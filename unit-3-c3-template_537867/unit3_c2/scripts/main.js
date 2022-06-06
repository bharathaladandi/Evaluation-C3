document.querySelector("#submit").addEventListener("click",signUpFun);


 JSON.parse(localStorage.getItem("user")) || [];
 
function signUpFun(){
    event.preventDefault();
var userObj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    address: document.querySelector("#address").value,
    wallet: document.querySelector("#amount").value,
};


   localStorage.setItem("user",JSON.stringify(userObj));
}

