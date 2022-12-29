import express from 'express'
import * as dotenv from 'dotenv'
import sequelize from './db.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import router from "./routes/index.js"
import {errorHandler} from "./middlewares/ErrorHandlingMiddleware.js"
import {fileURLToPath} from "url";
import path from "path";
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import {User} from "./models/models.js"
import tokenService from "./service/tokenService.js"
import UserDTO from "./dtos/userDto.js"
import {v4} from "uuid"


dotenv.config()

const port = process.env.PORT

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
const __dirname = fileURLToPath(import.meta.url)
app.use(express.static(path.resolve(__dirname, '..', 'static')))
app.use(fileUpload({}))
app.use(cookieParser())
app.use('/', router)
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


passport.serializeUser(function (user, done) {
    done(null, user.id)
})
passport.deserializeUser(async function (id, done) {
    const user = await User.findOne({where: {id: id}})
    done(null, user)
})
passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "https://clothes-shop-production.up.railway.app/auth/google/callback",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    async function (accessToken, refreshToken, profile, cb) {
        const userFind = await User.findOne({where: {email: profile.emails[0].value}})
        if (!userFind) {
            const activationLink = v4()
            const restoreLink = v4()
            const newUser = await User.create({email: profile.emails[0].value, activationLink, restoreLink})
            const userDto = new UserDTO(newUser)
            const tokens = tokenService.generateTokens({...userDto})
            await tokenService.saveToken(userDto.id, tokens.refreshToken)
            const user = {...tokens, ...userDto}
            return cb(null, user)
        }
        const userDto = new UserDTO(userFind)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        const user = {...tokens, ...userDto}
        return cb(null, user)
    }
))

app.get("/auth/google", passport.authenticate("google", {scope: ["profile", "email"]}))
app.get("/auth/google/callback",
    passport.authenticate("google", {failureRedirect: "https://clothes-shop-red.vercel.app/login"}),
    function (req, res) {
        // Successful authentication, redirect secrets.
        res.cookie('user', req.user.email)
        res.redirect("https://clothes-shop-red.vercel.app")
    })


//Error handling, last middleware
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()