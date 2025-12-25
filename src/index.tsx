import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <div id="root">
      <script type="module" src="/static/app.js?v=9"></script>
    </div>
  )
})

app.get('/intro', (c) => {
  return c.render(
    <div id="root">
      <script type="module" src="/static/intro.js?v=7"></script>
    </div>
  )
})

app.get('/room', (c) => {
  return c.render(
    <div id="root">
      <script type="module" src="/static/room.js?v=7"></script>
    </div>
  )
})

app.get('/uplink', (c) => {
  return c.render(
    <div id="root">
      <script type="module" src="/static/uplink.js?v=1"></script>
    </div>
  )
})

app.get('/leaderboard', (c) => {
  return c.render(
    <div id="root">
      <script type="module" src="/static/leaderboard.js?v=1"></script>
    </div>
  )
})

export default app
