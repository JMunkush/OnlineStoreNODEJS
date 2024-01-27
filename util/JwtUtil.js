const jwt = require("jsonwebtoken");

class JwtUtil {
    static async generateJwt(id, email, role){
        return jwt.sign({id: id, email, role: role}, process.env.SECRET_KEY,
            {expiresIn: "24h"});
    }
}

module.exports = JwtUtil;