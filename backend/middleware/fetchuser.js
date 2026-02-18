const jwt = require("jsonwebtoken");

const JWT_SECRET = "mySuperSecretKey";

const fetchuser = (req, res, next) => {
    const token = req.header("auth-token");

    console.log("TOKEN RECEIVED:", token);

    if (!token) {
        return res.status(401).send({ error: "please authenticate a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);

        console.log("DECODED DATA:", data);

        req.user = data.user;
        next();
    } catch (error) {
        console.log("JWT ERROR:", error.message);
        return res.status(401).send({ error: "please authenticate a valid token" });
    }
};

module.exports = fetchuser;
