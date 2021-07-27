
function signup(e) {
    e.preventDefault();
    const name = document.getElementById("Nama").value;
    const email = document.getElementById("Email").value;
    const pass = document.getElementById("Password").value;
    alert("pembuatan akun berhasil");
    window.location.assign("tiket.html")
   
}