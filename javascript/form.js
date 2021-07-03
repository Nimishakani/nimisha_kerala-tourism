let email= document.getElementById("email");
let error= document.getElementById("error");
let password= document.getElementById("password");
let pass_err = document.getElementById("pass_err");
function email_val(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (regexp.test(email.value)){
        email.style.border= " 2px solid green";
        error.innerHTML="";
        error.style.color="green";
        
        return true;

    }
    else{
        error.innerHTML="Invalid";
        error.style.color="red";
        
        return false;
    }
}


