import express from 'express'
import path from 'path'

const app = express()
app.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT || 8080

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server is running om port ${port}`)
})
