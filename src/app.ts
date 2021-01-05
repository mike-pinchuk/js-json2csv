import express from 'express'
import router from './routes/index'

const PORT = process.env.PORT || 3000

const app = express()

app.use(router)
app.listen(PORT, () => console.log(`Server has been launched at ${PORT} port`))


