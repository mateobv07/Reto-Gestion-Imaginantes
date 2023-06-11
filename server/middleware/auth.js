import jwt from 'jsonwebtoken';
import requestIp from 'request-ip';

const AuthenticateToken = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(" ")[1];

    if (!token) return res.status(401).json({"message": "Missing Authorization header"});

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        const reqIP = requestIp.getClientIp(req);
        if (err || user.ip !== reqIP ) return res.status(401).json({"message": "Invalid Auth Token"});

        //will expire in less than 30min
        if(user.exp - Math.round(Date.now() / 1000) < 1800) {
            delete user.iat;
            delete user.exp;
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h'});
            res.header('SET-AUTH', [accessToken]);
        }else{
            res.header('SET-AUTH', [null]);
        }
        req.user = user;
        next();
    })
}

export default AuthenticateToken;