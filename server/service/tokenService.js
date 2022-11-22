import jwt from 'jsonwebtoken'
import {Token} from "../models/models.js";

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.ACCES_SECRET_KEY, {expiresIn: '10s'})
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.ACCES_SECRET_KEY)
            return userData
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.REFRESH_SECRET_KEY)
            return userData
        } catch (e) {
            return null
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

    async removeToken(refreshToken) {
        const tokenData = await Token.destroy({where: {refreshToken: refreshToken}})
        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken: refreshToken}})
        return tokenData
    }
}

const tokenService = new TokenService()

export default tokenService