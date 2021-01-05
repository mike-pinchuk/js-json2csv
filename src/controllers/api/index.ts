import { Router } from 'express'
import main_page from '../routes/main_page'
import secondPage from '../routes/second_page'

const router = Router()

main_page(router)
secondPage(router)

export default router


