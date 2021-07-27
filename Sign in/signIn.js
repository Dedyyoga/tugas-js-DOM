
function signIn(e) {
    e.preventDefault();
    const name = document.getElementById("Nama").value;
    const pass = document.getElementById("Password").value;
    if(name === "user" && pass === "user"){
        alert("Login Berhasil");
        window.location.assign("tiket.html")
    }else{
        alert ("Harap masukan lagi");
        name.value=""
        pass.value=""
    }
   
}