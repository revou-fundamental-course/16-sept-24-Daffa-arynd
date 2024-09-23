// Fungsi untuk meminta nama pengguna dan menampilkannya
function greetUser() {
    // Meminta nama pengguna
    const userName = prompt("Silakan masukkan nama Anda:");

    // Jika pengguna memasukkan nama, tampilkan sapaan
    if (userName) {
        document.getElementById("greeting").innerHTML = "Hai " + userName + ", Selamat datang di Website saya";
    } else {
        document.getElementById("greeting").innerHTML = "Hai Tamu, Selamat datang di Website saya";
    }
}

// Fungsi validasi dan pengiriman form
function submitForm() {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const message = document.getElementById("message").value;

    document.getElementById("displayName").textContent = name;
    document.getElementById("displayDob").textContent = dob;
    document.getElementById("displayGender").textContent = gender;
    document.getElementById("displayMessage").textContent = message;

    alert("Form berhasil disubmit!");
}
