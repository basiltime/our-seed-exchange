import prisma from '../../../lib/prisma'
const bcrypt = require('bcrypt');

export default function handler(req, res) {
    const body = req.body
    // Validate any empty fields
    if (!body.first || !body.last || !body.email || !body.zone) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Please fill out all fields' })
    }

    // Hash the password, then save the user to the db
    bcrypt.hash(body.pw, 10, async function(err, hash) {
        const result = await prisma.user.create({
            data: {
                email: body.email,
                first: body.first,
                last: body.last,
                zone: body.zone,
                pw: hash
            },
        });
        res.json(result);
    })
}