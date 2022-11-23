import express from 'express'
import * as dotenv from 'dotenv'
import sequelize from './db.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import router from "./routes/index.js"
import {errorHandler} from "./middlewares/ErrorHandlingMiddleware.js";
import {fileURLToPath} from "url";
import path from "path";
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import {User} from "./models/models.js";

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
}));
app.use(passport.initialize());
app.use(passport.session());

const jane = User.build()
await jane.save()
passport.use('name', jane);
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    const user = User.findOne({where: {id: id}})
    done(null, user)
});
passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
        userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    function (accessToken, refreshToken, profile, cb) {
        const user = User.findOrCreate({where: {email: profile.email}})
        return cb(null, user);
    }
))


app.get("/auth/google",
    passport.authenticate("google", {scope: ["profile"]})
);
app.get("/auth/google/callback",
    passport.authenticate("google", {failureRedirect: "http://localhost:3000"}),
    function (req, res) {
        // Successful authentication, redirect secrets.
        res.redirect("http://localhost:3000");
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