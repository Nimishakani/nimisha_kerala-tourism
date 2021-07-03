let email= document.getElementById("email");
let error= document.getElementById("error");

let password= document.getElementById("password");

let phone_no = document.getElementById("phone_no");
let phno_err =document.getElementById("phno_err");
let password2 =document.getElementById("password2");
let pass_err2 = document.getElementById("pass_err2");

function validate(){
    
    if (email_val() && password_val()&& phno_val()){
        return true;
    }
    else{
        return false;
    }
}

function email_val(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if (regexp.test(email.value)){
        error.innerHTML="";
        email.style.border= "1px solid green";
        // error.style.color="green";
        return true;

    }
    else{
        error.innerHTML="Invalid";
        error.style.color="red";
        console.log("false");
        return false;
    }
}



function password_val(){
    if(password2.value!=""){
        if(password.value != password2.value){
            pass_err2.innerHTML= "Passwords did not match";
            pass_err2.style.color="red";
            return false
        }
        else{
            pass_err2.innerHTML="";
            password2.style.border= "1px solid green";
            return true;
        }
    }
    
    


}

function phno_val(){
    let phnexp = /^([1-9]{3})([\ .-]?)([0-9]{3})([\ .-]?)([0-9]{4})$/;
    if (phnexp.test(phone_no.value)){
        error.innerHTML="";
        email.style.border= "1px solid green";
        return true;
    }
    else{
        phno_err.innerHTML="Invalid";
        phno_err.style.color="red";
        return false;
    }
    
}
