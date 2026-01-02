Cara Menjalankan Aplikasi
1. Clone / Siapkan Project

Masuk ke folder project:

cd simple-api-server

2. Install Dependency

Jalankan perintah berikut untuk menginstall Express:

npm install

3. Jalankan Server
node index.js


Jika berhasil, akan muncul pesan:

Server jalan di http://localhost:3000

4. Akses Aplikasi

Buka browser dan akses:

http://localhost:3000


Frontend form HTML akan tampil.

Cara Menggunakan Aplikasi
1. Kirim Data dari Form

Isi Nama dan Email

Klik tombol Kirim

Data akan dikirim ke backend melalui API

2. Cek Data yang Tersimpan

Buka URL berikut di browser:

http://localhost:3000/api/form


Contoh response:

[
  {
    "nama": "Betari Indrianing Sugiarto",
    "email": "betariindri@gmail.com"
  }
]
