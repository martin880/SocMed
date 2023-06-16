import moment from "moment/moment.js";
import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Must login first !!!")

    jwt.verify(token, "secret-key", (err, userInfo) => {
        if(err) return res.status(403).json("Invalid token!!")

        const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)
        LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC`;
    
        db.query(q, [userInfo.id, userInfo.id], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    })

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

export const addPost = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Must login first !!!")

    jwt.verify(token, "secret-key", (err, userInfo) => {
        if(err) return res.status(403).json("Invalid token!!")

        const q = "INSERT INTO posts (`desc`, `img`, `createdAt`, `userId`) VALUES (?)";

        const val = [
                req.body.desc,
                req.body.img,
                moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                userInfo.id
            ];
    
        db.query(q, [val], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Post successfully added");
        });
    })

};