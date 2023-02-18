import { verify } from "../../../services/jwt_sign_verify";
import { cookieParser } from 'cookie-parser'

export default async function handler(req, res) {
    // check if there is an auth cookie
    // verify it isn't expired
    // if user is logged in, return true
    // else, return false
    const secret = process.env.SUPER_SECRET;
    const jwt = req.cookies['auth']
    if (jwt === undefined || jwt === '') { return res.status(401).json({ success: 'false', message: 'You are not logged in!' })};

    try {
        await verify(jwt, secret);
        res.status(200).json({ success: 'true', message: 'You are logged in!' })
    } catch (error) {
        res.status(401).json({ success: 'false', message: 'You are not logged in!' })
    }
    
}