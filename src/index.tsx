import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div id="root">
      <script type="module" src="/static/app.js?v=5"></script>
    </div>
  )
})

app.get('/intro', (c) => {
  return c.render(
    <div id="root">
      <script type="module" src="/static/intro.js?v=5"></script>
    </div>
  )
})

app.get('/room', (c) => {
  return c.render(
    <div id="root">
      <script type="module" src="/static/room.js?v=5"></script>
    </div>
  )
})

export default app
