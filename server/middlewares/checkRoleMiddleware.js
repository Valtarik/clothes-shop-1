import jwt from 'jsonwebtoken'

export function checkRoleMiddleware(role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: 'Ви не авторизувались'})
            }
            const decoded = jwt.verify(token, process.env.ACCES_SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(403).json({message: 'Немає доступу'})
            }
            req.user = decoded
            next()
        } catch (e) {
            console.log(e.message)
            return res.status(401).json({message: 'Ви не авторизувались!'})
        }
    }
}




