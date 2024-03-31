import { BACKEND_URL } from '@repo/common/config'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  c.json({
    message:BACKEND_URL
  })
  return c.text(BACKEND_URL)
})

export default app
