import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import * as trpcExpress from '@trpc/server/adapters/express'
import { createContext, router } from './trpc'

const app = express()

const appRouter = router({

})

app.use(morgan('dev'))
app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
}))


export default app