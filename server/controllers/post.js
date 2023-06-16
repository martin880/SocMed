import { db } from "../db.js";

export const getPosts = (req, res) => {
    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`;

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};



// SELECT: Ini menandakan bahwa kita ingin mengambil data dari tabel-tabel yang ditentukan dalam query.

// p.*, u.id AS userId, name, profilePic: Ini adalah daftar kolom yang ingin kita ambil dari tabel-tabel tersebut.

// p.* menunjukkan bahwa kita ingin mengambil semua kolom dari tabel posts.

// u.id AS userId berarti kita ingin mengambil kolom id dari tabel users dan mengubah namanya menjadi userId.

// name dan profilePic adalah kolom-kolom lain yang ingin kita ambil.

// FROM posts AS p: Ini menunjukkan bahwa kita ingin mengambil data dari tabel posts dan kita memberikan tabel ini alias p

// agar lebih mudah mengacu pada tabel tersebut dalam query.

// JOIN users AS u: Ini menandakan bahwa kita ingin melakukan operasi JOIN dengan tabel users dan memberikan tabel ini alias u.

// ON (u.id = p.userId): Ini adalah kondisi JOIN yang menentukan bagaimana kedua tabel harus dihubungkan.

// Di sini, JOIN dilakukan berdasarkan kolom id dari tabel users yang harus sama dengan kolom userId dari tabel posts.
