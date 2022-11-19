import jwt from 'jsonwebtoken'
import {Token} from "../models/models.js";

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.ACCES_SECRET_KEY, {expiresIn: '1h'})
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({where: {userId: userId}})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await Token.create({userId: userId, refreshToken})
        return token
    }
}

const tokenService = new TokenService()

export default tokenService