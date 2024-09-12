function sub(){
    let user=document.getElementById(`UserName`).value;
    let pass=document.getElementById(`Password`).value;
    if(user=="shaun" && pass=="1234"){
        window.location.href="calc.html";
        alert("login successs")
    }
    else{
        alert("Invalid Username or Password");
    }    
}