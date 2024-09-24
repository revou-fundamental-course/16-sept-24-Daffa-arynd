// Fungsi untuk meminta nama pengguna dan menampilkannya
function greetUser() {
    // Meminta nama pengguna
    const userName = prompt("Silakan masukkan nama Anda:");

    // Jika pengguna memasukkan nama, tampilkan sapaan
    if (userName) {
        document.getElementById("greeting").innerHTML = "Hi " + userName + ", Welcome to My Musical Vibes";
    } else {
        document.getElementById("greeting").innerHTML = "Hi User, Welcome to My Musical Vibes";
    }
}

  // Daftar nama file gambar
  const images = ['../assets/BB.jpg', '../assets/logo.jpg', '../assets/BE.jpg'];
            
  // Elemen banner
  const banner = document.querySelector('.photo-banner');

  // Indeks gambar saat ini (mulai dari 0)
  let currentImageIndex = 0;

  // Fungsi untuk mengubah gambar latar belakang
  function changeImage() {
      banner.style.backgroundImage = `url(../assets/${images[currentImageIndex]})`;
      currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  document.addEventListener('DOMContentLoaded', function() {
    setInterval(changeImage, 5000);
});



// Fungsi validasi dan pengiriman form
function submitForm() {
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();

    // Validasi
    if (name === "") {
        alert("Nama harus diisi");
        return;
    }
    if (dob === "") {
        alert("Tanggal lahir harus diisi");
        return;
    }
    if (!gender) {
        alert("Jenis kelamin harus dipilih");
        return;
    }
    if (message === "") {
        alert("Pesan harus diisi");
        return;
    }

    // Tampilkan nilai pada bagian tampilan pesan
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayDob").textContent = dob;
    document.getElementById("displayGender").textContent = gender.value;
    document.getElementById("displayMessage").textContent = message;

    alert("Form berhasil disubmit!");
}

function updateTime() {
    const currentTime = new Date().toString();
    document.getElementById("currentTime").textContent = currentTime;
}

// Memperbarui waktu setiap detik
setInterval(updateTime, 1000);
