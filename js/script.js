// Fungsi untuk menampilkan nama pengguna
function displayUsername() {
    var username = "John Doe"; // Ganti dengan data dinamis
    document.getElementById("greeting").innerHTML = "Hi " + username + ", Welcome to My Website";
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
