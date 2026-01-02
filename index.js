const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Agar folder "public" bisa diakses browser
app.use(express.static('public'));

// Penyimpanan data
let formData = [];

// API POST
app.post('/api/form', (req, res) => {
    const data = req.body;

    if (!data.nama || !data.email) {
        return res.status(400).json({
            message: 'Nama dan Email wajib diisi'
        });
    }

    formData.push(data);

    res.json({
        message: 'Data berhasil disimpan',
        data: data
    });
});

// API GET
app.get('/api/form', (req, res) => {
    res.json(formData);
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});
