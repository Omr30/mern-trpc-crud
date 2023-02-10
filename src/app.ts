import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import * as trpcExpress from '@trpc/server/adapters/express'
import { createContext, router } from './trpc'
import { notesRouter } from './routes/notes'
import cors from 'cors'

const app = express()

const appRouter = router({
    note: notesRouter
})

app.use(cors())
app.use(morgan('dev'))

app.use('/trpc', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
}))

export type AppRouter = typeof appRouter

export default app