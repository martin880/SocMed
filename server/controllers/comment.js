import { db } from "../db.js";
import jwt from "jsonwebtoken";
import moment from "moment/moment.js";

export const getComments = (req, res) => {
        const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId)
        WHERE c.postId = ? ORDER BY c.createdAt DESC`;
    
        db.query(q, [req.query.postId], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);
        });

};

export const addComment = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Must login first !!!")

    jwt.verify(token, "secret-key", (err, userInfo) => {
        if(err) return res.status(403).json("Invalid token!!")

        const q = "INSERT INTO comments (`desc`, `createdAt`, `userId`, `postId`) VALUES (?)";

        const val = [
                req.body.desc,
                moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                userInfo.id,
                req.body.postId
            ];
    
        db.query(q, [val], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Comments successfully added");
        });
    })

};