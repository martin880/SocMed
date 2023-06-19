import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
    const q = "SELECT followerUserId FROM relationships WHERE followedUserId = ?";

    db.query(q, [req.query.followedUserId], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data.map(relationship => relationship.followerUserId));
    });
}

export const addRelationships = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Must login first !!!")

    jwt.verify(token, "secret-key", (err, userInfo) => {
        if(err) return res.status(403).json("Invalid token!!")

        const q = "INSERT INTO likes (`userId`, `postId`) VALUES (?)";

        const val = [
                userInfo.id,
                req.body.postId
            ];
    
        db.query(q, [val], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Your post are liked");
        });
    })
};

export const deleteRelationships = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Must login first !!!")

    jwt.verify(token, "secret-key", (err, userInfo) => {
        if(err) return res.status(403).json("Invalid token!!")

        const q = "DELETE FROM likes WHERE `userId` = ? AND `post.id` = ?";
    
        db.query(q, [userInfo.id, req.query.postId], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("Post are disliked");
        });
    })
};

