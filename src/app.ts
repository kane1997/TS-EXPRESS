
// src/app.ts
import express from 'express' // 路由
import logger from './utils/logger'
import config from '../config/default'
import routes from './routes'
import initMiddleware from './middleware'

const app = express()
app.use(express.json())
initMiddleware(app)

const PORT = config.port;


app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`)
    routes(app)
})


