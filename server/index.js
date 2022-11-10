import express from 'express'
import * as dotenv from 'dotenv'
import sequelize from './db.js'
import * as models from './models/models.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import router from "./routes/index.js"
import {errorHandler} from "./middlewares/ErrorHandlingMiddleware.js";
import {fileURLToPath} from "url";
import path from "path";

dotenv.config()

const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
const __dirname = fileURLToPath(import.meta.url)
app.use(express.static(path.resolve(__dirname, '..', 'static')))
app.use(fileUpload({}))
app.use('/', router)


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