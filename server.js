import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).send(Ok)
})

app.listen(3000, () => {
    console.log('server is runing in port 3000')
})