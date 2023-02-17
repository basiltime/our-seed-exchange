import prisma from '../../../lib/prisma'
import { sign } from 'jsonwebtoken'
const bcrypt = require('bcrypt');

export default function handler(req, res) {

    if (req.method === 'POST') {
        const body = req.body
        if (!body.email) {
            return res.status(400).json({ success: 'false', message: 'Please enter email' })
        }
        if (!body.pw) {
            return res.status(400).json({ success: 'false', message: 'Please enter password' })
        }

        async function checkUser(email, pw) {
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })
            // Match password with bcrypt
            const match = await bcrypt.compare(pw, user.pw);
            
            if(match) {
                const claims = { user: user.id };
                const jwt = sign(claims, '6baa48bb-4f29-4b13-a8ab-d5ce8b88d1a3')
                return res.status(200).json({ success: 'true', authToken: jwt})
            } else {
                return res.status(401).json({ success: 'false', message: 'Incorrect password'})
            }
        
        }
        checkUser(body.email, body.pw);

    } else {
        return res.status(405).json({ data: 'Only POST method allowed'});
    }
}